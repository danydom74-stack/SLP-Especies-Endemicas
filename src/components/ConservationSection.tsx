import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, Eye, Ban, Share2, BookMarked, ExternalLink, Award, CheckCircle2, XCircle, RotateCcw, Trees } from 'lucide-react';

export const ConservationSection: React.FC = () => {
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: '¿Qué significa que una especie sea endémica de México?',
      options: [
        'Que habita únicamente dentro del territorio mexicano y no vive silvestre en otro país.',
        'Que fue introducida recientemente desde el extranjero para cultivo.',
        'Que está en peligro crítico de extinción obligatoriamente.',
        'Que solo puede vivir en zoológicos y jardines botánicos.'
      ],
      correct: 0,
      explanation: 'Una especie endémica de México tiene su distribución natural restringida a nuestro país, con independencia de su categoría de riesgo.'
    },
    {
      question: '¿Por qué el Peotillo (Pelecyphora aselliformis) es tan vulnerable al saqueo ilegal?',
      options: [
        'Porque crece muy rápido y coloniza las ciudades.',
        'Por su lentísimo crecimiento, pequeño tamaño y alta demanda entre coleccionistas no autorizados.',
        'Porque es venenoso para el ganado del Altiplano.',
        'Porque únicamente florece una vez cada cien años.'
      ],
      correct: 1,
      explanation: 'Las cactáceas globosas del Altiplano tardan décadas en alcanzar su madurez reproductora; extraerlas del campo destruye colonias enteras.'
    },
    {
      question: '¿En qué municipio de San Luis Potosí documenta CONABIO colonias de perrito llanero mexicano?',
      options: [
        'En Aquismón, dentro de la selva huasteca.',
        'En Venegas, en los pastizales intermontanos del Altiplano norte.',
        'En Tamasopo, en las cascadas del río.',
        'En el centro histórico de la capital potosina.'
      ],
      correct: 1,
      explanation: 'El perrito llanero (Cynomys mexicanus) está documentado en Venegas (localidades como El Gallo B y Green House).'
    },
    {
      question: 'Si una especie es nativa de San Luis Potosí, ¿significa que es exclusiva del estado?',
      options: [
        'Sí, cualquier especie nativa es exclusiva de donde se le observe.',
        'No, puede ser nativa de San Luis Potosí y a la vez encontrarse de forma natural en otros estados o países.',
        'Sí, nativa y endémica significan exactamente lo mismo.',
        'Solo si es un reptil o un anfibio.'
      ],
      correct: 1,
      explanation: 'Nativa alude a que pertenece al ecosistema natural; endémica de una región implica exclusividad estricta territorial.'
    },
    {
      question: '¿Qué norma oficial mexicana clasifica las especies de flora y fauna en categorías de riesgo?',
      options: [
        'NOM-059-SEMARNAT-2010',
        'NOM-001-STPS-2008',
        'NOM-251-SSA1-2009',
        'NOM-005-CONAGUA-2015'
      ],
      correct: 0,
      explanation: 'La NOM-059-SEMARNAT-2010 es la norma que categoriza las especies en: En peligro de extinción (P), Amenazada (A) y Protección especial (Pr).'
    }
  ];

  const handleSelectAnswer = (questionIdx: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const actions = [
    {
      icon: <Eye className="w-5 h-5 text-[#285744]" />,
      title: 'Respeta la fauna silvestre',
      text: 'Observa a los animales a distancia, sin perseguirlos, capturarlos ni alimentarlos. Las serpientes inofensivas cumplen un rol vital controlando roedores.'
    },
    {
      icon: <Trees className="w-5 h-5 text-[#285744]" />,
      title: 'Cuida los hábitats',
      text: 'Evita dejar residuos en áreas naturales, mantente en senderos trazados y no enciendas fogatas en temporada de sequía en bosques y pastizales.'
    },
    {
      icon: <Ban className="w-5 h-5 text-[#B85F40]" />,
      title: 'No extraigas plantas ni animales',
      text: 'Jamás recolectes cactáceas del Altiplano ni orquídeas serranas en floración. Dejar cada planta en su suelo preserva el banco genético del estado.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#B85F40]" />,
      title: 'Evita el comercio ilegal',
      text: 'No compres ejemplares silvestres en carreteras o tianguis. Exige siempre permisos de aprovechamiento legal (UMAs autorizadas por SEMARNAT).'
    },
    {
      icon: <Share2 className="w-5 h-5 text-[#D6AD4E]" />,
      title: 'Comparte información confiable',
      text: 'Difunde datos respaldados por CONABIO y universidades para desmitificar especies temidas y concienciar a tu comunidad escolar o familiar.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#285744]" />,
      title: 'Apoya la conservación local',
      text: 'Infórmate sobre las Áreas Naturales Protegidas estatales (como ANP El Potosí o Sierra de Álvarez) y proyectos comunitarios de restauración.'
    }
  ];

  return (
    <section id="conservacion" className="py-16 bg-[#FAF6ED] border-t border-[#403B32]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider block mb-1">
            SECCIÓN 06 · ACCIÓN Y COMPROMISO
          </span>
          <h2 className="font-boogaloo text-4xl sm:text-5xl text-[#285744] tracking-wide mb-3">
            PROTEJAMOS LO QUE NOS HACE ÚNICOS
          </h2>
          <p className="text-base text-[#403B32]/85 font-nunito leading-relaxed">
            Cada especie forma parte de una historia evolutiva que no se puede reemplazar. Conocer la biodiversidad de San Luis Potosí nos permite valorar nuestro entorno, reconocer las amenazas que enfrenta y participar activamente en su preservación.
          </p>
        </div>

        {/* Big Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#285744] text-[#F3E9D5] shadow-md mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-boogaloo text-3xl sm:text-4xl leading-tight">
              La protección de la naturaleza comienza con informarnos
            </h3>
            <p className="text-sm font-nunito text-[#F3E9D5]/90 leading-relaxed">
              Respetar los hábitats silvestres y compartir conocimiento verificado transforma la curiosidad en conservación real y tangible para San Luis Potosí.
            </p>
          </div>
          <div className="stamp-box bg-[#FAF6ED] text-[#285744] px-5 py-3 rounded-md text-center shrink-0">
            <span className="text-xs font-mono font-bold block">EXPEDIENTE NATURAL</span>
            <span className="font-boogaloo text-2xl text-[#B85F40]">SLP BIODIVERSIDAD</span>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mb-16">
          <h3 className="font-boogaloo text-3xl text-[#285744] mb-6">
            ¿QUÉ PUEDES HACER TÚ? · SEIS ACCIONES CLAVE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((act, i) => (
              <div
                key={i}
                className="bg-[#F3E9D5] p-5 rounded-xl border border-[#403B32]/15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF6ED] flex items-center justify-center mb-3 border border-[#403B32]/10">
                    {act.icon}
                  </div>
                  <h4 className="font-boogaloo text-xl text-[#285744] mb-2 leading-snug">
                    {act.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#403B32]/85 font-nunito leading-relaxed">
                    {act.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Quiz: Carnet del Explorador Potosino */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F3E9D5] border-2 border-[#285744]/30 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#403B32]/15">
            <div>
              <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider">
                AUTOEVALUACIÓN AMBIENTAL INTERACTIVA
              </span>
              <h3 className="font-boogaloo text-2xl sm:text-3xl text-[#285744]">
                CUESTIONARIO DEL EXPLORADOR POTOSINO
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#403B32]/80">
              <Award className="w-4 h-4 text-[#D6AD4E]" />
              <span>Pregunta {currentQuestion + 1} de {quizQuestions.length}</span>
            </div>
          </div>

          {!showResults ? (
            <div className="space-y-6">
              <div>
                <h4 className="font-boogaloo text-2xl text-[#285744] mb-4">
                  {quizQuestions[currentQuestion].question}
                </h4>

                <div className="space-y-2.5">
                  {quizQuestions[currentQuestion].options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentQuestion] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(currentQuestion, optIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left font-nunito text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#285744] text-[#F3E9D5] border-[#285744] shadow-xs'
                            : 'bg-[#FAF6ED] text-[#403B32] hover:bg-[#FAF0E6] border-[#403B32]/15'
                        }`}
                      >
                        <span>{opt}</span>
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          isSelected ? 'border-[#F3E9D5] bg-[#F3E9D5]/20' : 'border-[#403B32]/30'
                        }`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#F3E9D5]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation buttons inside quiz */}
              <div className="flex items-center justify-between pt-4 border-t border-[#403B32]/15">
                <button
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 bg-[#FAF6ED] text-xs font-bold font-nunito text-[#403B32] rounded-lg border border-[#403B32]/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Anterior
                </button>

                {currentQuestion < quizQuestions.length - 1 ? (
                  <button
                    disabled={selectedAnswers[currentQuestion] === undefined}
                    onClick={() => setCurrentQuestion((prev) => prev + 1)}
                    className="px-5 py-2 bg-[#285744] text-xs font-bold font-nunito text-[#F3E9D5] rounded-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                  >
                    Siguiente pregunta
                  </button>
                ) : (
                  <button
                    disabled={selectedAnswers[currentQuestion] === undefined}
                    onClick={() => setShowResults(true)}
                    className="px-6 py-2 bg-[#B85F40] text-xs font-bold font-nunito text-[#F3E9D5] rounded-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                  >
                    Ver resultados y carnet
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 bg-[#FAF6ED] rounded-xl border border-[#285744]/30 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#285744]/10 text-[#285744] flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-[#B85F40]" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider block">
                  EVALUACIÓN COMPLETADA
                </span>
                <h4 className="font-boogaloo text-3xl text-[#285744] mt-1">
                  Tu puntuación: {calculateScore()} de {quizQuestions.length} correctas
                </h4>
                <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito max-w-md mx-auto mt-2">
                  {calculateScore() >= 4
                    ? '¡Excelente rigor naturalista! Comprendes con claridad las diferencias entre especies endémicas, nativas y normativas oficiales.'
                    : '¡Buen intento de exploración! Revisa las secciones anteriores para reforzar la diferencia entre endemismo y distribución nativa.'}
                </p>
              </div>

              {/* Review answers breakdown */}
              <div className="text-left space-y-3 pt-4 border-t border-[#403B32]/15">
                <p className="text-xs font-mono font-bold text-[#285744] uppercase">Revisión pedagógica:</p>
                {quizQuestions.map((q, idx) => {
                  const isCorrect = selectedAnswers[idx] === q.correct;
                  return (
                    <div key={idx} className="p-3 bg-[#F3E9D5] rounded-lg border border-[#403B32]/10 text-xs font-nunito">
                      <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-[#B85F40] shrink-0" />
                        )}
                        <span className="font-bold text-[#403B32]">
                          P{idx + 1}: {q.question}
                        </span>
                      </div>
                      <p className="text-[#403B32]/80 pl-6">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setCurrentQuestion(0);
                  setShowResults(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#285744] text-[#F3E9D5] rounded-lg text-xs font-bold font-nunito cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Volver a intentar</span>
              </button>
            </div>
          )}
        </div>

        {/* Sources & Institutional Links (Footnotes) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#EFE3C7] border border-[#403B32]/20">
          <div className="flex items-center gap-2.5 mb-4 text-[#285744]">
            <BookMarked className="w-5 h-5 text-[#285744]" />
            <h3 className="font-boogaloo text-2xl sm:text-3xl">
              FUENTES CIENTÍFICAS Y RECURSOS OFICIALES
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#403B32]/85 font-nunito mb-6 max-w-3xl">
            La información presentada en este expediente ha sido recopilada a partir de plataformas y documentos públicos de las autoridades ambientales mexicanas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-nunito mb-6">
            <a
              href="https://enciclovida.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#FAF6ED] hover:bg-[#FFFFFF] rounded-xl border border-[#403B32]/15 transition-all flex items-start justify-between group"
            >
              <div>
                <span className="font-bold text-[#285744] group-hover:text-[#B85F40] block mb-0.5">
                  CONABIO · EncicloVida
                </span>
                <span className="text-[#403B32]/75">
                  Consulta de nombres científicos, distribución, mapas de registros y fotografías de especímenes.
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#403B32]/50 group-hover:text-[#285744] shrink-0 ml-2 mt-0.5" />
            </a>

            <a
              href="https://www.biodiversidad.gob.mx/region/EEB/estudios.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#FAF6ED] hover:bg-[#FFFFFF] rounded-xl border border-[#403B32]/15 transition-all flex items-start justify-between group"
            >
              <div>
                <span className="font-bold text-[#285744] group-hover:text-[#B85F40] block mb-0.5">
                  La Biodiversidad en San Luis Potosí: Estudio de Estado
                </span>
                <span className="text-[#403B32]/75">
                  Diagnóstico exhaustivo sobre fisiografía, vegetación, endemismos y factores de presión en SLP.
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#403B32]/50 group-hover:text-[#285744] shrink-0 ml-2 mt-0.5" />
            </a>

            <a
              href="https://www.gob.mx/semarnat/documentos/norma-oficial-mexicana-nom-059-semarnat-2010"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#FAF6ED] hover:bg-[#FFFFFF] rounded-xl border border-[#403B32]/15 transition-all flex items-start justify-between group"
            >
              <div>
                <span className="font-bold text-[#285744] group-hover:text-[#B85F40] block mb-0.5">
                  SEMARNAT · NOM-059-SEMARNAT-2010
                </span>
                <span className="text-[#403B32]/75">
                  Protección ambiental de especies nativas de México de flora y fauna silvestres y categorías de riesgo.
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#403B32]/50 group-hover:text-[#285744] shrink-0 ml-2 mt-0.5" />
            </a>

            <a
              href="https://segam.slp.gob.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#FAF6ED] hover:bg-[#FFFFFF] rounded-xl border border-[#403B32]/15 transition-all flex items-start justify-between group"
            >
              <div>
                <span className="font-bold text-[#285744] group-hover:text-[#B85F40] block mb-0.5">
                  SEGAM SLP · Secretaría de Ecología y Gestión Ambiental
                </span>
                <span className="text-[#403B32]/75">
                  Información sobre el Sistema Estatal de Áreas Naturales Protegidas (ANP El Potosí, Sierra de Álvarez).
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#403B32]/50 group-hover:text-[#285744] shrink-0 ml-2 mt-0.5" />
            </a>
          </div>

          {/* Credits and Methodology */}
          <div className="pt-4 border-t border-[#403B32]/15 text-xs text-[#403B32]/75 font-nunito leading-relaxed">
            <p className="mb-1">
              <strong>Créditos y metodología:</strong> Las ilustraciones presentadas poseen fines educativos y de divulgación, con una estética inspirada en los cuadernos de expedición botánica y faunística del siglo XIX. No sustituyen los registros taxonómicos formales ni la cartografía oficial georreferenciada.
            </p>
            <p>
              Diseñado con la paleta natural potosina: Verde bosque (<code>#285744</code>), Crema natural (<code>#F3E9D5</code>), Terracota (<code>#B85F40</code>) y Amarillo ocre (<code>#D6AD4E</code>).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
