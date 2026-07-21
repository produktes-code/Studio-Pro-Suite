import unittest
from unittest.mock import patch
from app.services.library import LibraryService


class TestLibraryCache(unittest.TestCase):
    @patch("app.services.library.os.walk")
    def test_scan_directory_cache(self, mock_walk):
        # Configuramos el mock para que devuelva un directorio con 1 archivo
        mock_walk.return_value = [
            ("/mock_dir", [], ["sample1.wav", "sample2.wav", "not_audio.txt"])
        ]

        lib = LibraryService()

        # Primer intento: debe llamar a os.walk
        results1 = lib.scan_directory("/mock_dir")
        self.assertEqual(len(results1), 2)
        mock_walk.assert_called_once_with("/mock_dir")

        # Reseteamos el mock
        mock_walk.reset_mock()

        # Segundo intento: debe usar cache y NO llamar a os.walk
        results2 = lib.scan_directory("/mock_dir")
        self.assertEqual(len(results2), 2)
        mock_walk.assert_not_called()


if __name__ == "__main__":
    unittest.main()
