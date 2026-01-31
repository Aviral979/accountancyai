import { useState, useCallback } from 'react';
import Tesseract from 'tesseract.js';

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
    setState({ isProcessing: true, progress: 0, error: null });

    try {
      const result = await Tesseract.recognize(
        file,
        'eng+hin', // English + Hindi support for CBSE
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              setState(prev => ({
                ...prev,
                progress: Math.round(m.progress * 100),
              }));
            }
          },
        }
      );

      setState({ isProcessing: false, progress: 100, error: null });
      return result.data.text;
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
