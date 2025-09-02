
class ContaBancaria:

    __slots__ = ['agencia', 'numero', 'titular', 'saldo']

    def __init__(self, agencia, numero, titular):
        self.agencia = agencia
        self.numero = numero
        self.titular = titular
        self.__saldo = 0.0


    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor
            return True
        return False
    
    def sacar(self, valor):
        if self.__saldo >= valor:
            self.__saldo -= valor
            return True
        return False

    def consultar_saldo(self):
        return self.__saldo