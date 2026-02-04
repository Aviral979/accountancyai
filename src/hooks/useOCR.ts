import { useState, useCallback } from 'react';

interface OCRState {
  isProcessing: boolean;
  progress: number;
  error: string | null;
}

export function useOCR() {
  const [state, setState] = useState<OCRState>({
    isProcessing: false,
    progress: 0,
    error: null,
  });

  const extractText = useCallback(async (file: File): Promise<string> => {
    setState({ isProcessing: true, progress: 10, error: null });

    try {
      // Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      setState(prev => ({ ...prev, progress: 30 }));

      // Call AI-powered OCR endpoint
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/extract-text`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ imageBase64: base64 }),
      });

      setState(prev => ({ ...prev, progress: 80 }));

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to extract text');
      }

      const data = await response.json();
      setState({ isProcessing: false, progress: 100, error: null });
      
      return data.text || '';
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'OCR failed';
      setState({ isProcessing: false, progress: 0, error: errorMessage });
      throw new Error(errorMessage);
    }
  }, []);

  const resetState = useCallback(() => {
    setState({ isProcessing: false, progress: 0, error: null });
  }, []);

  return {
    extractText,
    resetState,
    isProcessing: state.isProcessing,
    progress: state.progress,
    error: state.error,
  };
}
