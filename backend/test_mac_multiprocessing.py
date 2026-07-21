import unittest
import multiprocessing


class TestMacMultiprocessing(unittest.TestCase):
    def test_freeze_support(self):
        # En Windows o Mac empaquetado esto previene el fork bomb.
        # Aquí comprobamos que se puede invocar sin crashear.
        try:
            multiprocessing.freeze_support()
            success = True
        except Exception:
            success = False

        self.assertTrue(success, "multiprocessing.freeze_support() lanzó una excepción")


if __name__ == "__main__":
    unittest.main()
