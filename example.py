#hello.repy
name = "sharktide"
def say_hello(name) :
    print("reStructuredPython is Awesome!")
    return name
def say_bye(name) :
    print(f'Bye {name}')
say_bye(say_hello(name))