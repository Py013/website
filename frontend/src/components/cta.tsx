'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useState } from 'react';

import axios from 'axios';

export function JoinCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      await axios.post('/api/subscribe', { email: email.trim() });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="join" className="pt-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-yellow-100 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Junte-se a nós nessa{' '}
          <span className="bg-gradient-to-r from-blue-500 to-yellow-500 text-transparent bg-clip-text">
            missão
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Democratizar o aprendizado em tecnologia e moldar o futuro da educação
          colaborativa. Isso só acontece com você na comunidade. Participe dos
          eventos, troque conhecimento e faça parte da Py013.
        </p>

        {/* <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mb-8 flex flex-col sm:flex-row gap-3"
        >
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="flex-1 rounded-full px-5 py-4 bg-gray-50 border-gray-200 text-gray-900 h-12"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto rounded-full font-bold h-12 px-8"
          >
            {status === "loading" ? "Enviando..." : "Inscrever-se"}
          </Button>
        </form> */}

        {/* {status === "success" && (

          <p className="text-sm text-green-600 mb-4">
            Inscrição realizada! Verifique seu e-mail.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 mb-4">
            Ocorreu um erro. Tente novamente.
          </p>
        )}

        <p className="text-xs text-gray-400">
          Prometemos zero spam. Apenas conteúdo relevante sobre Python e
          tecnologia.
        </p> */}
        <img
          src="/images/logo-cut.svg"
          alt="Join"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
