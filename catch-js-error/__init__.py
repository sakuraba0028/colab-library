import google.colab.output

def catch_js_error(err):
    print(err)

google.colab.output.register_callback("catch_js_error", catch_js_error)
