import google.colab.output

def print_js_log(log):
    print(log)

google.colab.output.register_callback("print_js_log", print_js_log)
