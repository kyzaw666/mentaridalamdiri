import { useNavigate } from "react-router-dom";

const DetectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold text-center">
        Yuk Deteksi Permasalahan Sosialmu
      </h1>
      <button
        onClick={() => navigate("/afirmasi")}
        className="btn btn-primary px-8 py-3"
      >
        Mulai Konseling
      </button>
    </div>
  );
};

export default DetectionPage;