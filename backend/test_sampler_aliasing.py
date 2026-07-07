import unittest
import numpy as np
from unittest.mock import patch, MagicMock
from app.services.sampler import SamplerService

class TestSamplerAliasing(unittest.TestCase):
    @patch('app.services.sampler.sf.read')
    @patch('app.services.sampler.sf.write')
    @patch('app.services.sampler.os.path.exists')
    def test_sampler_resample(self, mock_exists, mock_write, mock_read):
        mock_exists.return_value = True
        
        # Generar onda cuadrada simple
        sample_rate = 44100
        t = np.linspace(0, 1.0, sample_rate, endpoint=False) # 1 sec
        data = np.sign(np.sin(2 * np.pi * 440 * t)) # Square wave at 440Hz
        
        mock_read.return_value = (data, sample_rate)
        
        sampler = SamplerService()
        
        # Base note 60, target 72 (+1 octava -> pitch factor 2 -> length debe ser la mitad)
        sampler.trigger_sample("dummy.wav", midi_note=72, base_note=60)
        
        mock_write.assert_called_once()
        written_data = mock_write.call_args[0][1]
        
        # Como es una octava arriba y cortamos/envelopamos, length depende del envelope (gate=1.0, release=0.2 => 1.2s total envelope)
        # La onda original era 1.0s, al hacer pitch shift a 72 (+1 octava), la onda resampleada es 0.5s.
        # El output len es min(len(pitched_data), envelope_len) => min(22050, 52920) = 22050
        
        expected_len = sample_rate // 2
        self.assertEqual(len(written_data), expected_len)

if __name__ == '__main__':
    unittest.main()
