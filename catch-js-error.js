const catchJsError = err => google.colab.kernel.invokeFunction('catch', [err.stack], {});
