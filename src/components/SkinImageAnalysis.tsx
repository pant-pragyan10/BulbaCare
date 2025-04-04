
import { useSkinAnalysis } from "@/hooks/useSkinAnalysis";
import ImageUploader from "./skin-analysis/ImageUploader";
import AnalysisButton from "./skin-analysis/AnalysisButton";
import ResultsDisplay from "./skin-analysis/ResultsDisplay";

const SkinImageAnalysis = () => {
  const {
    previewUrl,
    isAnalyzing,
    analysisResult,
    handleFileSelected,
    resetAnalysis,
    analyzeImage
  } = useSkinAnalysis();

  return (
    <div className="space-y-6">
      <ImageUploader 
        previewUrl={previewUrl} 
        onFileSelected={handleFileSelected} 
        resetAnalysis={resetAnalysis} 
      />
      
      {previewUrl && (
        <div className="flex justify-center">
          <AnalysisButton isAnalyzing={isAnalyzing} onAnalyze={analyzeImage} />
        </div>
      )}

      {analysisResult && <ResultsDisplay result={analysisResult} />}
    </div>
  );
};

export default SkinImageAnalysis;
