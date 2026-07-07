import unittest
import numpy as np
from unittest.mock import patch
from app.services.synthesizer import SynthesizerService

class TestSynthPolyphony(unittest.TestCase):
    @patch('app.services.synthesizer.sf.write')
    def test_polyphony_limit(self, mock_write):
        synth = SynthesizerService()
        
        # Generar 20 frecuencias
        freqs = [440.0 + i * 10 for i in range(20)]
        
        # Deberia truncar a 16 notas
        synth.generate_chord(freqs)
        
        # Verificamos que se genero el archivo (llamada a sf.write)
        mock_write.assert_called_once()
        
        # Extraer el array generado de la llamada a sf.write
        wave_data = mock_write.call_args[0][1]
        
        # Confirmamos que se ejecuto (no peto por OOM)
        self.assertIsInstance(wave_data, np.ndarray)
        self.assertTrue(len(wave_data) > 0)

if __name__ == '__main__':
    unittest.main()
