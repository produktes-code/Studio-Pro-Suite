import unittest
from unittest.mock import patch
import time
from app.services.mixing import MixingService


class TestServiceDeadlock(unittest.TestCase):
    @patch("app.services.analysis.AnalysisService.analyze_audio")
    def test_safe_analyze_track_timeout(self, mock_analyze):
        # Simulamos que analysis.py se queda colgado indefinidamente
        def hang(*args, **kwargs):
            time.sleep(10)
            return {"bpm": 100}

        mock_analyze.side_effect = hang

        mixer = MixingService()

        start_time = time.time()
        # Llamamos con timeout corto (1 segundo) para el test
        result = mixer.safe_analyze_track("dummy.wav", timeout=1)
        duration = time.time() - start_time

        # Comprobamos que salió por timeout y no se bloqueó 10 segundos
        self.assertLess(duration, 3.0)
        self.assertEqual(result.get("error"), "timeout")


if __name__ == "__main__":
    unittest.main()
