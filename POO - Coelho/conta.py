
class ContaBancaria:

    __slots__ = ['agencia', 'numero', 'titular', 'saldo']

    def __init__(self, agencia, numero, titular):
        self.agencia = agencia
        self.numero = numero
        self.titular = titular
        self.saldo = 0.0

