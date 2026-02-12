import React, { useState, useEffect } from 'react';

const App = () => {
  const COLORS = {
    headerBg: '#0F1F46',
    primaryRed: '#F63440',
    primaryBlue: '#2653F5',
    darkBlue: '#0F1F46',
    badgeYellow: '#EFB435',
    white: '#FFFFFF',
    black: '#000000',
    bgGray: '#F8F9FA',
    grayLight: '#F3F4F6',
    grayBorder: '#E5E7EB',
    textGray: '#6B7280',
    disabledGray: '#E0E0E0'
  };

  const JOBTODAY_LINKS = {
    vendedor_creativo: "https://jobtoday.com/es/jobs?q=vendedor+atencion+cliente",
    vendedor_analitico: "https://jobtoday.com/es/jobs?q=cajero+control+caja",
    organizador_creativo: "https://jobtoday.com/es/jobs?q=supervisor+ventas",
    organizador_analitico: "https://jobtoday.com/es/jobs?q=almacen+logistica",
    profesional_creativo: "https://jobtoday.com/es/jobs?q=encargado+turno",
    profesional_analitico: "https://jobtoday.com/es/jobs?q=coordinador+sala"
  };

  const BLOQUES = [
    {
      nombre: "AGILIDAD",
      emoji: "💨",
      preguntas: [
        { 
          p: "¿Qué significa para ti 'incorporación inmediata'?", 
          r: [
            { t: "Que ya estoy de camino en el metro mientras respondo.", v: 3 },
            { t: "Mañana a primera hora con el café en la mano.", v: 2 },
            { t: "Dame 48 horas para cerrar mi vida actual.", v: 1 },
            { t: "Depende de si el sueldo es tan inmediato como mi alta.", v: 4 }
          ]
        },
        { 
          p: "Son las 20:00, falta media hora para cerrar y entra un grupo de 10 personas sin reserva:", 
          r: [
            { t: "Sonrío y saco mesa de donde no hay; cada ticket cuenta.", v: 3 },
            { t: "Les aviso de que la cocina cierra pronto, pero que pasen.", v: 2 },
            { t: "Miro el reloj con un odio profundo pero disimulado.", v: 1 },
            { t: "Les digo que estamos completos; la salud mental es lo primero.", v: 4 }
          ]
        },
        {
          p: "Para que un turno salga perfecto, tu herramienta clave es:",
          r: [
            { t: "Zapatillas cómodas y una sonrisa a prueba de balas.", v: 4 },
            { t: "Una libreta donde nada se me escapa.", v: 3 },
            { t: "Tener a mis compañeros a una mirada de entendimiento.", v: 2 },
            { t: "Que el datáfono no se quede sin batería.", v: 1 }
          ]
        }
      ]
    },
    {
      nombre: "CALLE",
      emoji: "🤝",
      preguntas: [
        { 
          p: "Un cliente te dice que 'en el otro local es más barato':", 
          r: [
            { t: "Le explico por qué nuestro servicio vale cada céntimo.", v: 3 },
            { t: "Le sonrío y le digo que aquí la calidad es otra liga.", v: 2 },
            { t: "Le indico amablemente dónde está el otro local.", v: 1 },
            { t: "Le ignoro mientras sigo cobrando al siguiente.", v: 4 }
          ]
        },
        { 
          p: "El datáfono da 'Operación Denegada' tres veces y hay cola:", 
          r: [
            { t: "Mantengo la calma, hago un chiste y busco otra solución.", v: 3 },
            { t: "Pido al cliente que reinicie su tarjeta mientras atiendo al siguiente.", v: 2 },
            { t: "Empiezo a sudar frío pero no pierdo el ritmo.", v: 1 },
            { t: "Llamo al encargado; los problemas técnicos no son mi guerra.", v: 4 }
          ]
        },
        {
          p: "Tu superpoder en el trabajo es:",
          r: [
            { t: "Venderle hielo a un esquimal (y que me dé las gracias).", v: 3 },
            { t: "Cuadrar la caja al céntimo a la primera.", v: 3 },
            { t: "Hacer el trabajo de tres personas sin que se note el caos.", v: 2 },
            { t: "Ser invisible cuando el jefe busca a quién echarle la bronca.", v: 1 }
          ]
        }
      ]
    },
    {
      nombre: "RESISTENCIA",
      emoji: "💪",
      preguntas: [
        { 
          p: "¿Qué opinas de 'ponerse la camiseta' en un turno de 10 horas?", 
          r: [
            { t: "Si el equipo rema junto, me la pongo y sudo con orgullo.", v: 3 },
            { t: "Me la pongo, pero espero que sea transpirable y se pague bien.", v: 2 },
            { t: "La camiseta está bien, pero el respeto al horario está mejor.", v: 1 },
            { t: "Yo vengo a trabajar, no a un equipo de fútbol.", v: 4 }
          ]
        },
        { 
          p: "El grupo de WhatsApp del trabajo echa humo en tu día libre:", 
          r: [
            { t: "Lo leo por si necesitan ayuda urgente; soy un activo.", v: 3 },
            { t: "Lo miro de reojo y solo respondo si es de vida o muerte.", v: 2 },
            { t: "Modo archivo activado hasta el lunes a las 09:00.", v: 1 },
            { t: "Me salí del grupo el primer día; mi tiempo es sagrado.", v: 4 }
          ]
        },
        {
          p: "Cuando el caos reina en el local, tú:",
          r: [
            { t: "Organizo el flujo y priorizo la experiencia del cliente.", v: 3 },
            { t: "Me enfoco en los números y que nada se quede sin registrar.", v: 3 },
            { t: "Hago de puente entre la cocina/almacén y el cliente.", v: 2 },
            { t: "Sigo las órdenes al pie de la letra sin cuestionar.", v: 1 }
          ]
        }
      ]
    },
    {
      nombre: "ENERGÍA",
      emoji: "🔥",
      preguntas: [
        { 
          p: "¿La propina es un derecho o un privilegio?", 
          r: [
            { t: "Un premio a mi capacidad de hacer que el cliente vuelva.", v: 3 },
            { t: "Una parte necesaria para compensar el esfuerzo del día.", v: 2 },
            { t: "Algo que se reparte equitativamente; aquí ganamos todos.", v: 1 },
            { t: "Un mito urbano que rara vez ocurre.", v: 4 }
          ]
        },
        { 
          p: "Te piden vender un producto que sabes que es 'regulero':", 
          r: [
            { t: "Le busco el ángulo positivo y lo vendo como edición limitada.", v: 3 },
            { t: "Sigo el script de ventas que me han dado y ya.", v: 1 },
            { t: "Intento ofrecer una alternativa mejor para que el cliente no se queje.", v: 2 },
            { t: "Si me obligan, lo vendo, pero bajo mi responsabilidad moral.", v: 4 }
          ]
        },
        {
          p: "Tu cliente ideal es:",
          r: [
            { t: "El que se deja aconsejar y se va con una sonrisa.", v: 3 },
            { t: "El que sabe lo que quiere, paga rápido y no da problemas.", v: 3 },
            { t: "El que valora el trabajo bien hecho y deja buena reseña.", v: 2 },
            { t: "Cualquiera que no me haga repetir la frase '¿Desea algo más?'.", v: 1 }
          ]
        }
      ]
    },
    {
      nombre: "VISIÓN",
      emoji: "🎯",
      preguntas: [
        { 
          p: "Si el jefe te dice 'confío en ti para cerrar el local':", 
          r: [
            { t: "Lo tomo como el primer paso para ser encargado/a.", v: 3 },
            { t: "Lo hago con precisión quirúrgica: alarmas, luces y caja.", v: 2 },
            { t: "Me alegra la confianza, pero pregunto por el plus de responsabilidad.", v: 1 },
            { t: "Pienso en que voy a llegar a casa media hora más tarde.", v: 4 }
          ]
        },
        { 
          p: "¿Quién eres cuando te quitas el uniforme?", 
          r: [
            { t: "La misma persona con energía, solo que sin el logo en el pecho.", v: 3 },
            { t: "Alguien que analiza cómo optimizar el turno de mañana.", v: 2 },
            { t: "Una profesional que sabe desconectar para rendir al 100% luego.", v: 1 },
            { t: "Un fantasma que huye de cualquier sitio que huela a trabajo.", v: 4 }
          ]
        },
        {
          p: "Tu zona de confort profesional es:",
          r: [
            { t: "El centro de la acción, el trato directo y la persuasión.", v: 3 },
            { t: "El control del stock, la caja y que todo cuadre.", v: 3 },
            { t: "Coordinar que el equipo no se mate entre sí mientras el cliente espera.", v: 2 },
            { t: "Hacer mi tarea asignada de la mejor forma posible y punto.", v: 1 }
          ]
        }
      ]
    }
  ];

  const TRANSITION_MESSAGES = [
    "¡A tope! Has superado el primer sprint. No te detengas.",
    "Eres una máquina. El encargado te está mirando con buenos ojos.",
    "Turno complicado, pero tú aguantas. Vamos a por el siguiente.",
    "Cargando propinas... digo, resultados. ¡Dale caña!"
  ];

  const ARQUETIPOS = {
    vendedor: {
      id: "vendedor",
      titulo: "VENDEDOR/A NATO/A",
      subtitulo: "El/La Rey/Reina del Trato Directo",
      nivelLabel: "Perfil Estrella",
      mensaje: "Vives para el contacto con el cliente. Tu energía es contagiosa, tu sonrisa desarma y tu capacidad de persuasión podría vender arena en el desierto. Eres el alma de cualquier local.",
      rasgos: [
        "Carisma natural",
        "Gestión de objeciones",
        "Improvisación ante imprevistos",
        "Energía contagiosa"
      ],
      estado: "VENDEDOR PROFESIONAL",
      roles_creativo: "Atención al cliente, Ventas retail",
      roles_analitico: "Cajero/a, Control de caja",
      nota: "Las empresas de hostelería y retail te necesitan."
    },
    organizador: {
      id: "organizador",
      titulo: "ORGANIZADOR/A IMPLACABLE",
      subtitulo: "El/La Guardián/a del Orden",
      nivelLabel: "Control Total",
      mensaje: "Eres precisión hecha persona. Sabes dónde está cada cosa, cuadras la caja al céntimo y nada se te escapa. El caos te molesta; el control te motiva.",
      rasgos: [
        "Gestión de inventario",
        "Precisión en caja",
        "Seguimiento de procesos",
        "Análisis de datos"
      ],
      estado: "ORGANIZADOR EXPERTO",
      roles_creativo: "Supervisor/a de ventas",
      roles_analitico: "Almacén, Logística interna",
      nota: "Tu capacidad de organización es oro en cualquier sector."
    },
    profesional: {
      id: "profesional",
      titulo: "PROFESIONAL 360°",
      subtitulo: "El/La Todoterreno",
      nivelLabel: "Versatilidad Máxima",
      mensaje: "Tienes lo mejor de ambos mundos: tratas bien al cliente Y mantienes el orden. Eres el puente entre el cliente que reclama y la cocina que colapsa. El equipo te necesita.",
      rasgos: [
        "Versatilidad extrema",
        "Gestión de conflictos",
        "Coordinación de equipo",
        "Visión global"
      ],
      estado: "PROFESIONAL COMPLETO",
      roles_creativo: "Encargado/a de turno",
      roles_analitico: "Coordinador/a de sala",
      nota: "Tu perfil híbrido es perfecto para puestos de responsabilidad."
    }
  };

  const [step, setStep] = useState('HERO');
  const [currentBlock, setCurrentBlock] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [perfilAnswers, setPerfilAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [archetype, setArchetype] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [perfilTipo, setPerfilTipo] = useState("hibrido");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    if (isAnalyzing) {
      const texts = [
        "Buscando locales que necesitan personal para AYER...",
        "Revisando ese 90% de ofertas que responden antes de que te acabes el café...",
        "Entrando en el chat de los encargados de tu zona (están flipando contigo)...",
        "Verificando si tus zapatillas aguantan un turno de 10 horas...",
        "Preparando tu ficha de Candidato Estrella. Casi lo tienes."
      ];
      let i = 0;
      const interval = setInterval(() => {
        setLoadingText(texts[i]);
        i++;
        if (i >= texts.length) clearInterval(interval);
      }, 900);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const calcularMetricas = (answersList) => {
    const blocks = [];
    for (let i = 0; i < 5; i++) {
      blocks.push(answersList.slice(i * 3, (i + 1) * 3));
    }
    
    const avgBlock = (block) => {
      const sum = block.reduce((a, b) => a + b, 0);
      return Math.round((sum / block.length / 4) * 100);
    };
    
    return {
      "Agilidad": avgBlock(blocks[0]),
      "Calle": avgBlock(blocks[1]),
      "Resistencia": avgBlock(blocks[2]),
      "Energía": avgBlock(blocks[3]),
      "Visión": avgBlock(blocks[4])
    };
  };

  const calcularPerfil = (perfilList) => {
    const count = {
      creativo: 0,
      analitico: 0,
      hibrido: 0,
      neutro: 0
    };
    
    perfilList.forEach(p => {
      count[p] = (count[p] || 0) + 1;
    });
    
    if (count.creativo > count.analitico + count.hibrido) return "creativo";
    if (count.analitico > count.creativo + count.hibrido) return "analitico";
    return "hibrido";
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    const currentQ = BLOQUES[currentBlock].preguntas[currentQuestion];
    const selectedOption = currentQ.r[selectedAnswer];
    
    const newAnswers = [...answers, selectedOption.v];
    setAnswers(newAnswers);

    if (currentQuestion < 2) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else if (currentBlock < 4) {
      setStep('TRANSITION');
    } else {
      setIsAnalyzing(true);
      
      setTimeout(() => {
        const totalScore = newAnswers.reduce((a, b) => a + b, 0);
        const avg = totalScore / newAnswers.length;
        const percentage = Math.round((avg / 4) * 100);
        let result;
        if (avg <= 2.0) result = ARQUETIPOS.profesional;
        else if (avg <= 3.0) result = ARQUETIPOS.organizador;
        else result = ARQUETIPOS.vendedor;
        
        const calculatedMetrics = calcularMetricas(newAnswers);
        const perfil = calcularPerfil(perfilAnswers);
        
        setArchetype(result);
        setMetrics(calculatedMetrics);
        setScorePercentage(percentage);
        setPerfilTipo(perfil);
        setIsAnalyzing(false);
        setStep('RESULTS');
      }, 5000);
    }
  };

  const nextBlock = () => {
    setCurrentBlock(currentBlock + 1);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setStep('QUESTIONS');
  };

  return (
    <div style={{ background: COLORS.bgGray, minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div style={{ 
        maxWidth: '100%', 
        margin: '0 auto',
        padding: window.innerWidth >= 768 ? '40px 20px' : '0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: window.innerWidth >= 768 ? 'center' : 'flex-start',
        justifyContent: 'center'
      }}>
        
        <div style={{ 
          maxWidth: '500px',
          width: '100%',
          background: window.innerWidth >= 768 ? COLORS.white : 'transparent',
          borderRadius: window.innerWidth >= 768 ? '24px' : '0',
          boxShadow: window.innerWidth >= 768 ? '0 20px 60px rgba(0,0,0,0.12)' : 'none',
          overflow: 'hidden',
          minHeight: window.innerWidth >= 768 ? 'auto' : '100vh'
        }}>
        
        <nav style={{ background: COLORS.headerBg, padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid ' + COLORS.white }}>
              <img src="https://taniadeazevedo.es/wp-content/uploads/2025/11/cropped-Yo.jpg" alt="Tania" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ color: COLORS.white, fontSize: '18px', fontWeight: '600' }}>×</span>
            <img src="https://taniadeazevedo.es/wp-content/uploads/2026/02/logo-280-1.gif" alt="JobToday" style={{ height: '36px', width: 'auto' }} />
          </div>
        </nav>

        {step === 'HERO' && (
          <div style={{ padding: '40px 20px 50px', textAlign: 'center', background: COLORS.bgGray }}>
            <div style={{ background: COLORS.badgeYellow, color: COLORS.white, padding: '8px 18px', borderRadius: '100px', fontSize: '11px', fontWeight: '700', margin: '0 auto 40px', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              PRUEBA DE SELECCIÓN EXPRESS
            </div>
            
            <div style={{ 
              width: '120px', 
              height: '120px', 
              margin: '0 auto 30px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#86B6F6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: COLORS.primaryBlue, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: COLORS.darkBlue, stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
                  fill="url(#lightningGrad)" 
                  stroke={COLORS.primaryBlue} 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <h1 style={{ color: COLORS.black, fontSize: '36px', fontWeight: '900', marginBottom: '16px', lineHeight: '1.1', letterSpacing: '-0.5px', padding: '0 10px' }}>
              Prueba de Fichaje Estrella
            </h1>
            
            <p style={{ color: COLORS.textGray, margin: '0 auto 40px', fontSize: '16px', maxWidth: '400px', lineHeight: '1.5', padding: '0 20px' }}>
              ¿Eres de los que resuelven o de los que miran? Demuestra que tienes la actitud para el puesto.
            </p>
            
            <button onClick={() => setStep('QUESTIONS')} style={{ background: COLORS.primaryBlue, color: COLORS.white, padding: '16px 40px', borderRadius: '12px', border: 'none', fontWeight: '800', fontSize: '15px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(38, 83, 245, 0.25)' }}>
              ¡VAMOS A CURRAR!
            </button>
            
            <p style={{ marginTop: '30px', fontSize: '13px', color: COLORS.textGray }}>
              15 preguntas · 5 bloques · 1 oportunidad de fichaje real
            </p>
          </div>
        )}

        {step === 'QUESTIONS' && (
          <div style={{ padding: '20px 16px 30px', background: COLORS.bgGray, minHeight: '500px' }}>
            
            <div style={{ marginBottom: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: '800', color: COLORS.primaryBlue, marginBottom: '12px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                BLOQUE {currentBlock + 1}/5 · {BLOQUES[currentBlock].nombre}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '14px' }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === currentQuestion ? COLORS.primaryBlue : COLORS.grayBorder, transition: 'all 0.3s ease' }} />
                ))}
              </div>
              
              <div style={{ width: '100%', height: '4px', background: COLORS.grayBorder, borderRadius: '10px', overflow: 'hidden', marginTop: '12px' }}>
                <div style={{ 
                  width: `${((currentBlock * 3 + currentQuestion + 1) / 15) * 100}%`, 
                  height: '100%', 
                  background: COLORS.primaryBlue, 
                  borderRadius: '10px', 
                  transition: 'width 0.4s ease'
                }}></div>
              </div>
            </div>

            <h2 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: '700', textAlign: 'center', color: COLORS.black, lineHeight: '1.3', padding: '0 10px' }}>
              {BLOQUES[currentBlock].preguntas[currentQuestion].p}
            </h2>

            <div style={{ marginBottom: '24px' }}>
              {BLOQUES[currentBlock].preguntas[currentQuestion].r.map((opt, i) => {
                const isSelected = selectedAnswer === i;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedAnswer(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '18px 20px',
                      margin: '10px 0',
                      borderRadius: '14px',
                      border: isSelected ? `2px solid ${COLORS.primaryBlue}` : 'none',
                      background: COLORS.white,
                      color: COLORS.black,
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      textAlign: 'left',
                      boxShadow: isSelected ? `0 0 0 1px ${COLORS.primaryBlue}` : '0 2px 6px rgba(0,0,0,0.06)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{ flex: 1, lineHeight: '1.4' }}>{opt.t}</span>
                    {isSelected && <span style={{ color: COLORS.primaryBlue, fontWeight: '900', fontSize: '18px', marginLeft: '10px' }}>✓</span>}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={handleNext} 
              disabled={selectedAnswer === null} 
              style={{ 
                display: 'block', 
                width: '100%',
                background: selectedAnswer === null ? COLORS.disabledGray : COLORS.primaryBlue, 
                color: COLORS.white, 
                padding: '16px', 
                borderRadius: '12px', 
                border: 'none', 
                fontWeight: '800', 
                fontSize: '15px', 
                cursor: selectedAnswer === null ? 'not-allowed' : 'pointer', 
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: selectedAnswer === null ? 'none' : '0 4px 12px rgba(38, 83, 245, 0.25)',
                transition: 'all 0.3s ease'
              }}
            >
              SIGUIENTE →
            </button>
          </div>
        )}

        {step === 'TRANSITION' && (
          <div style={{ padding: '60px 20px', textAlign: 'center', background: COLORS.bgGray }}>
            <div style={{ fontSize: '80px', marginBottom: '24px', animation: 'float 2s ease-in-out infinite' }}>
              {BLOQUES[currentBlock].emoji}
            </div>
            
            <div style={{ background: COLORS.white, borderRadius: '20px', padding: '28px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', maxWidth: '420px', margin: '0 auto 40px' }}>
              <p style={{ fontSize: '18px', fontWeight: '700', color: COLORS.black, lineHeight: '1.4', margin: 0 }}>
                {TRANSITION_MESSAGES[currentBlock]}
              </p>
            </div>
            
            <button 
              onClick={nextBlock}
              style={{ 
                background: COLORS.primaryBlue, 
                color: COLORS.white, 
                padding: '16px 40px', 
                borderRadius: '12px', 
                border: 'none', 
                fontWeight: '800', 
                fontSize: '15px', 
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 12px rgba(38, 83, 245, 0.25)'
              }}
            >
              BLOQUE {currentBlock + 2} →
            </button>
          </div>
        )}

        {isAnalyzing && (
          <div style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: COLORS.white,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              margin: '0 auto 24px',
              border: `4px solid ${COLORS.primaryBlue}`,
              borderTop: '4px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            
            <h3 style={{ 
              color: COLORS.primaryBlue, 
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px',
              textAlign: 'center',
              padding: '0 30px',
              maxWidth: '450px',
              lineHeight: '1.4'
            }}>
              {loadingText}
            </h3>
            
            <p style={{ 
              color: COLORS.textGray,
              fontSize: '12px'
            }}>
              No cierres esta ventana...
            </p>
          </div>
        )}

        {step === 'RESULTS' && archetype && metrics && (
          <div style={{ padding: '30px 20px 50px', background: COLORS.bgGray }}>
            <div style={{ background: COLORS.white, borderRadius: '24px', padding: '32px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center', marginBottom: '20px' }}>
              
              <div style={{ fontSize: '10px', fontWeight: '700', color: COLORS.primaryBlue, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                RESULTADO DEL ESCÁNER
              </div>

              <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px', color: COLORS.black, letterSpacing: '-0.5px', lineHeight: '1.1' }}>
                {archetype.titulo}
              </h1>
              <p style={{ color: COLORS.textGray, fontSize: '14px', marginBottom: '24px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {archetype.subtitulo}
              </p>

              <div style={{ background: COLORS.bgGray, padding: '20px', borderRadius: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '10px', color: COLORS.textGray, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
                  Nivel JobToday
                </div>
                <div style={{ fontSize: '42px', fontWeight: '900', color: COLORS.primaryBlue, marginBottom: '10px' }}>
                  {scorePercentage}%
                </div>
                <div style={{ width: '100%', height: '8px', background: COLORS.grayBorder, borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
                  <div style={{ width: `${scorePercentage}%`, height: '100%', background: COLORS.primaryBlue, borderRadius: '10px', transition: 'width 1.5s ease-out' }}></div>
                </div>
                <div style={{ fontSize: '12px', color: COLORS.textGray, fontWeight: '500' }}>
                  {archetype.nivelLabel}
                </div>
              </div>
              
              <div style={{ background: COLORS.bgGray, padding: '20px', borderRadius: '16px', marginBottom: '20px', textAlign: 'left' }}>
                <h4 style={{ fontSize: '11px', marginBottom: '14px', color: COLORS.textGray, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TUS RASGOS DETECTADOS:</h4>
                {archetype.rasgos.map((rasgo, i) => (
                  <div key={i} style={{ fontSize: '13px', margin: '8px 0', color: COLORS.black, display: 'flex', alignItems: 'center', paddingLeft: '2px' }}>
                    <span style={{ color: COLORS.primaryBlue, marginRight: '10px', fontWeight: 'bold', fontSize: '14px' }}>✓</span>
                    <span>{rasgo}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: COLORS.bgGray, padding: '20px', borderRadius: '16px', marginBottom: '20px', borderLeft: `4px solid ${COLORS.primaryBlue}` }}>
                <p style={{ fontSize: '13px', fontStyle: 'italic', color: COLORS.black, lineHeight: '1.5', margin: 0, textAlign: 'left' }}>
                  "{archetype.mensaje}"
                </p>
              </div>

              <div style={{ background: COLORS.bgGray, padding: '20px', borderRadius: '16px', marginBottom: '20px' }}>
                <h4 style={{ fontSize: '11px', marginBottom: '16px', color: COLORS.textGray, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
                  ANÁLISIS POR DIMENSIONES
                </h4>
                {Object.entries(metrics).map(([label, value]) => (
                  <div key={label} style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: COLORS.black }}>{label}</span>
                      <span style={{ fontSize: '14px', fontWeight: '800', color: COLORS.primaryBlue }}>{value}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: COLORS.grayBorder, borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: `${value}%`, height: '100%', background: COLORS.primaryBlue, borderRadius: '10px', transition: 'width 1.2s ease-out' }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: COLORS.bgGray, padding: '18px', borderRadius: '16px', marginBottom: '18px', textAlign: 'left', borderLeft: `4px solid ${COLORS.primaryBlue}` }}>
                <h4 style={{ fontSize: '10px', color: COLORS.textGray, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
                  ESTADO:
                </h4>
                <div style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primaryBlue }}>
                  {archetype.estado}
                </div>
              </div>

              <div style={{ background: COLORS.bgGray, padding: '18px', borderRadius: '16px', marginBottom: '18px', textAlign: 'left', borderLeft: `4px solid ${COLORS.primaryBlue}` }}>
                <h4 style={{ fontSize: '10px', color: COLORS.textGray, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
                  ROLES SUGERIDOS:
                </h4>
                <div style={{ fontSize: '13px', fontWeight: '600', color: COLORS.primaryBlue, lineHeight: '1.4' }}>
                  {perfilTipo === 'creativo' ? archetype.roles_creativo : archetype.roles_analitico}
                </div>
              </div>

              <div style={{ background: COLORS.bgGray, padding: '18px', borderRadius: '16px', marginBottom: '20px' }}>
                <p style={{ fontSize: '12px', color: COLORS.textGray, fontStyle: 'italic', marginBottom: '0', lineHeight: '1.4' }}>
                  {archetype.nota}
                </p>
              </div>

              <a href={JOBTODAY_LINKS[`${archetype.id}_${perfilTipo}`] || JOBTODAY_LINKS[`${archetype.id}_creativo`]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  width: '100%',
                  background: COLORS.primaryRed, 
                  color: COLORS.white, 
                  padding: '16px', 
                  borderRadius: '12px', 
                  border: 'none', 
                  fontWeight: '800', 
                  cursor: 'pointer', 
                  fontSize: '14px', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 12px rgba(246, 52, 64, 0.25)',
                  marginBottom: '14px'
                }}>
                  VER OFERTAS EN JOBTODAY →
                </button>
              </a>

              <button onClick={() => window.location.reload()} style={{ background: 'none', border: 'none', color: COLORS.textGray, fontSize: '12px', cursor: 'pointer', textDecoration: 'underline', padding: '16px 0 0', marginTop: '8px' }}>
                Repetir test
              </button>
            </div>

            <div style={{ background: COLORS.darkBlue, borderRadius: '20px', padding: '32px 20px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: COLORS.white, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', marginBottom: '24px' }}>
                SOBRE ESTE PROYECTO
              </div>
              
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto 14px', overflow: 'hidden', border: '3px solid ' + COLORS.white }}>
                <img src="https://taniadeazevedo.es/wp-content/uploads/2026/01/Gemini_Generated_Image_23gss023gss023gs-removebg-preview-Editada-e1770114580187.png" alt="Tania de Azevedo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
              </div>
              
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: COLORS.white, marginBottom: '8px' }}>
                Tania de Azevedo
              </h4>
              
              <p style={{ fontSize: '13px', color: COLORS.white, lineHeight: '1.5', marginBottom: '24px', maxWidth: '420px', margin: '0 auto 24px', opacity: 0.9 }}>
                Especialista en Branding y Diseño Web enfocada en crear productos que conectan. Tras este test hay una mezcla de estrategia, código e IA que estoy deseando aplicar para crear experiencias digitales para vosotros.
              </p>
              
              <a href="https://taniadeazevedo.es/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ background: COLORS.primaryBlue, color: COLORS.white, padding: '14px 32px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '13px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Descubre mi Portfolio
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 0px rgba(38, 83, 245, 0.4));
          }
          50% { 
            transform: scale(1.1); 
            filter: drop-shadow(0 0 20px rgba(38, 83, 245, 0.6));
          }
        }
      `}</style>
    </div>
  );
};

export default App;
