import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, DollarSign, PiggyBank, Smartphone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-blue-800">AIBANK</h1>
        <p className="text-xl text-blue-600">Sua solução financeira inteligente</p>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Recupere seu poder financeiro</h2>
          <p className="text-xl mb-8">Crédito inteligente e investimentos automatizados para negativados</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Comece Agora <ArrowRight className="ml-2" />
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Crédito Imediato</CardTitle>
              <CardDescription>Acesso a R$ 10.000 em crédito</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> R$ 5.000 disponíveis para uso</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> R$ 5.000 investidos automaticamente</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Investimento Inteligente</CardTitle>
              <CardDescription>BOT de IA gerencia seus investimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Rendimentos abatem sua dívida</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Potencial de 6.2% ao mês</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-8">Como funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Smartphone size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">1. Abra sua conta</h3>
              <p>Processo simples e rápido</p>
            </div>
            <div>
              <DollarSign size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">2. Receba crédito</h3>
              <p>R$ 10.000 em crédito inicial</p>
            </div>
            <div>
              <PiggyBank size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">3. Invista automaticamente</h3>
              <p>BOT de IA gerencia R$ 5.000</p>
            </div>
            <div>
              <CheckCircle size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">4. Recupere-se</h3>
              <p>Rendimentos abatem sua dívida</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Pronto para começar?</h2>
          <p className="text-xl mb-8">Junte-se a milhares de brasileiros recuperando seu poder financeiro</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Abra sua conta <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AIBANK. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
