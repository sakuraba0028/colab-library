const catchJsError = err => google.colab.kernel.invokeFunction('catch_js_error', [err.stack], {});
