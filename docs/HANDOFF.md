# Handoff — visitilhagrande.com (retomar acá)

> Doc para arrancar una sesión nueva sin perder nada. Pegá esto (o pedile a Claude que lo lea) al inicio del chat nuevo. La memoria del proyecto también se autocarga, pero acá está todo ordenado.

---

## 1. Qué es el proyecto
Guía de viaje **multilingüe** de **Ilha Grande, Brasil**, optimizada SEO+GEO para que las IA (ChatGPT/Perplexity/Gemini) y Google citen y recomienden la isla / Vila do Abraão. La escribe **Ricardo Aparicio**, dueño de la **Pousada CostaVerde** en Abraão — con **transparencia total** (autoría visible, nada de fingir neutralidad). Independiente del sitio de la pousada.

4 idiomas: **EN** (default, `/`), **FR** (`/fr/`), **PT** (`/pt/`), **ES** (`/es/`).

## 2. Stack / conexiones (lo técnico)
- **Repo:** `D:\cursor\visitilhagrande` (git, branch **main**). GitHub: `RVAparicio/visitilhagrande`.
- **Deploy:** cada `git push` a `main` → **auto-deploy a Cloudflare Workers (~1 min)**. Live: **https://visitilhagrande.com**.
- **Dev server:** `npm run dev` → **http://localhost:4321/** (suele estar corriendo). Build: `npm run build` (33 páginas).
- **Contenido:** Astro + Content Collections. Las guías están en `src/content/guides/<pillar>.<lang>.md` (ej. `beaches.en.md`, `beaches.pt.md`, `trails.es.md`…).
- **Directorio de playas:** datos en `src/i18n/beaches28.ts` + componentes `src/components/BeachesMap.astro` y `BeachesDirectory.astro`; render condicional en `src/pages/[...slug].astro`.
- **Mapa de playas:** `src/assets/mapa-praias-numeradas-ilha-grande.png` (imagen de Ricardo, marcadores 1–23 "quemados" en el PNG; clickeable → directorio).
- **Slugs beaches:** EN `ilha-grande-beaches`, ES `playas-ilha-grande`, FR `plages-ilha-grande`, PT `praias-ilha-grande`. Trails: `ilha-grande-trails`, `senderos-ilha-grande`, `sentiers-ilha-grande`, `trilhas-ilha-grande`.

## 3. Cómo trabajamos (EL MÉTODO — importante)
Ricardo es el **experto local**: él habla/dicta el contenido por tópico, **NUNCA se inventan datos**. Por cada tópico:
1. Ricardo suelta toda la info (en criollo, sin filtro).
2. Claude lo estructura y lanza un **Workflow (equipo de agentes)**: **guía local profesional + redactor senior** → **localización FR/PT/ES** → **focus group de 12 lectores** (4 idiomas × 3 personas: *planner / scanner / dreamer*) que miden **permanencia (dwell) y/o claridad** → **director** que dictamina `shipReady`.
3. Receta ganadora de redacción: **"feeling-first"** (entrar por la sensación) + datos duros en **callouts** (blockquotes) y **tablas**; bien **seccionado para Q&A**; tono cálido pero **profesional**; el ángulo **"qué evitar"** es oro.
4. Se **itera** (de-noise) hasta que el focus group quede contento, se **implementa en los 4 idiomas**, build, **se le muestra a Ricardo renderizado ANTES de pushear**, y recién con su OK → push + verificar en vivo (curl/grep) + actualizar memoria.

**Reglas de trato con Ricardo:** explicale en criollo, pasos cortos, **sé conciso y demostrá que entendiste** (le molesta repetir), no inventes, respetá la transparencia. Su color crudo/jerga es **contexto para vos**, NO para publicar. **Revisa antes de subir** cambios sustantivos.

**Regla de marca (recomendaciones):** Ricardo **SOLO recomienda lugares atendidos por sus propios dueños** (para comer o para dormir) — un dueño presente, encima de la cocina/personal/todo, es raro en Brasil y hace una diferencia enorme. Ya está en **Dónde dormir** (línea ~35) y en el **pilar de Comida** (commit `4b4666e`). Aplicar a cualquier recomendación futura.

## 4. Gotchas
- El shell se resetea: usá `cd /d/cursor/visitilhagrande && …` (o rutas absolutas). Ricardo usa **CMD de Windows**: pasale rutas estilo `D:\…` y `cd /d D:\…`.
- Para mostrarle algo: **servilo por el dev server** y **navegá SU Chrome** ahí (su visor de imágenes cachea). A veces dice "Docker" pero quiere decir "verlo" — el sitio corre en el dev server de Astro, no en Docker.
- El panel de Cloudflare se cuelga bajo automatización: guialo con clics, los hace él.
- **Higgsfield deforma mapas con números** — no usarlo para el mapa de marcadores; geografía/números los controla Ricardo (o un SVG propio).
- Workflows: a veces el "director" se confunde y dice que el borrador "no está en el repo" — es normal, el borrador ES la propuesta antes de implementar; ignorá esa parte, mirá el resto del veredicto.

## 5. Estado ACTUAL — qué está LIVE
**La página de PLAYAS está completa y a nivel de excelencia** (la permanencia simulada subió de ~70s a ~150–185s, lectores satisfechos en 4 idiomas). Orden de la página:
1. Intro + **Quick picks** (sin Aventureiro)
2. **Caminables desde Abraão** (Norte: Praia Preta 10', Galego · Este: Júlia 15', Crena/Abraãozinho 30' — Júlia NO para comer, comer en Abraãozinho/Crena · Circuito Histórico T1 plano 40min–1h · Feiticeira T2 máx ~160m, noble)
3. Playas famosas (Lopes Mendes, Dois Rios) + snorkel (Lagoa Azul/Verde) + "Más calmas & remotas" (Palmas, Caxadaço, **Aventureiro**, Parnaioca, Meros, Gruta do Acaiá)
4. **Paseos en barco** (4 tipos: Super Sul/Volta à Ilha · Meia Volta/Gruta do Acaiá · Ilhas Paradisíacas · alternativos Jerónimo/Caipirinha/Passeio do Índio/lancha privada) + tabla + "qué evitar"
5. **¿Cuántos días?** (plan 2-3 días primero, "dejá que el cielo decida", por qué 5-7 días, Taxa Viva R$50) + bloque **Lopes Mendes "cómo ir en barco"** (escuna vs taxi-boat + "qué evitar")
6. **Directorio de 23 playas** numeradas (mapa-localizador) + **islas de Angra A–E** (apéndice)

**Datos clave ya corregidos/confirmados por Ricardo** (no volver a cambiar sin que él lo diga):
- Lopes Mendes a pie **T10+T11 = 2h30–3h15** (homologado en playas Y senderos).
- Dois Rios **T14 = 7,2 km / ~2h30**. Aventureiro **T9 = ~4,3 km** (no walkable desde Abraão); **sin pulsera para entrar**, autorización solo para quedarse **+2h**.
- Palmas **~4,7 km / ~1h40**. Feiticeira (T2) **máx ~160m** (el perfil ~5km/220m/+400m/2-mirantes es de **T10/Palmas**, reservado para usar ahí).
- **Escuna (schooner)** a Lopes Mendes: del **muelle principal de madera de Abraão**, **10:30** (+9:30/11:30 en alta), deja en **Praia dos Mangues** (~50m de Pouso), vuelve de Mangues 15:30 (+16:30/17:30); **R$35 ida / R$70 i+v**.
- **Taxi-boat:** ~15 min → Pouso; **R$60 ida / R$100 i+v**; realista salir **~10:30** (dicen c/30min desde 9 pero necesitan cupo); **vuelta pactada al comprar (3/4/5pm, te recogen en Pouso)**. **Central de Táxi-Boat oficial = amarillo y negro + pulsera; nunca un taxi-boat suelto.**
- Marco "europeos/sudamericanos" → reemplazado por **eje de experiencia** (aventura vs postal). Caja "**2-3 días**" agregada (sin maltratar al de viaje corto).

**Pico do Papagaio (T13) — confirmado por Ricardo (no re-cambiar):**
- **~982 m**; la **Pedra d'Água ~1.035 m** es más alta y **tapa el atardecer** → por eso se sube de noche para el **amanecer**.
- **2,5–3,5 h subida + 2,5–3,5 h bajada** (~5–7 h de caminata). Acceso: **Estrada de Dois Rios / da Colônia, ~2 km** cuesta arriba hasta la entrada del sendero.
- **Vuelta:** con guía (amanecer) **~8–9 AM** en Abraão; de día **~6–7 h en total**, volvés con luz (salida 7–9 AM).
- **Subida nocturna sin guía PROHIBIDA desde hace 2 años.** Guía **registrado en CADASTUR** obligatorio para el amanecer · **12 bifurcaciones** · **sin rescate** (ni bomberos ni INEA) · avisar condición médica (hipoglucemia/diabetes/pánico) · **bastones para la bajada**.
- **Costo guía:** **R$230–R$380/persona**. **Reserva:** Google Maps/Instagram (el de mejores reseñas); cualquier agencia revende igual. **NO se nombra a Hans** (su favorito; lo mantiene independiente porque no le paga) → guiño "los locales **tenemos** un favorito, las reseñas lo delatan". Marcadores del continente (Gávea/Dedo de Deus/Marambaia) **removidos** (no confirmados).

**Dois Rios (T14) — confirmado por Ricardo (no re-cambiar):**
- **~7,2 km / ~2h30** ida (~5 h ida y vuelta a pie) · **altura máx 235 m** · se hace **con cualquier clima** · **sin servicios** (llevar agua/comida).
- **Acceso:** Estrada de Dois Rios **todo derecho** (camino ancho de ripio, era del presidio). **NO usar "el atajo"** (sendero indígena 3,2 km más corto, **intransitable**: INEA no lo poda — al publicar, decirlo factual, sin insultar).
- **Historia:** cafetal → fazenda → presidio (**demolido 1994 → museo**); tierras de **UERJ** (nadie vive/compra; familias = herederas de guardiacárceles); **policía penal hace check-in** al llegar; comida **caiçara**. Ríos **"Coca-Cola"** (tanino). **Jacarés = LEYENDA** ("cuentan que…"). Vibra **Uncharted 4** (selva comiéndose el cemento).
- **Vuelta (clave / "qué evitar"):** **sin barco fijo**; informal **R$150–200/p (~R$100 si son varios, con suerte)**; el de ~16:30 no sale si no junta nafta. **Salir a pie 15:30.** Día tipo (aritmética, OK de Ricardo): **8:00 → llega 10:30 → vuelve 15:30 → Abraão 18:00.** Es el **#1 recomendado de Ricardo**.

**Feiticeira (T1 + T2) — confirmado por Ricardo (no re-cambiar):**
- **Distancia: 3,9 km hasta la playa · 5,4 km haciendo todo el circuito (Lazareto + ruinas) · dificultad media · altura máx 160 m** (corregido por Ricardo: NO 6,4 km, NO 203 m — commit `afefaf1`).
- **Ruta:** garita amarilla + bifurcación → **der** = a nivel del mar (Praia Preta/Galego, opcional) · **izq** = sube al **acueducto** (pasando las **ruinas del Lazareto**, s.XIX cuarentena — Ricardo pidió nombrarlo). Acueducto = "el dilema". Sube **160 m de un tirón**, baja casi a nivel del mar, **2ª bifurcación izq** sube a la **cachoeira** (zambullida). Vuelve a **T2 norte** → **Praia de Feiticeira**.
- **Tiempos:** a la playa **con** cascada **1h40–2h**; vuelta **sin** el desvío de la cascada **1h20–1h40**.
- **Vuelta:** a pie **o barco ~R$35/p** (taxi-boats; fácil — contraste con Dois Rios). La playa es **última parada de los paseos populares → se llena**; estar volviendo **antes de 15:30**.
- **Sensorial:** verano 40°C + humedad = **sauna**; cascada **redentora**; piedra/troncos/arcilla, potos gigantes, palmeras, **poção** (piscinas naturales). Llevar **repelente + hiking shoes**. ("Corona" que dijo Ricardo → publicado como "cerveza fría", sin marca.)

**Circuito Histórico (T1) — confirmado por Ricardo (no re-cambiar):**
- **~3 km · ~1 h · plano · FÁCIL · ideal familia** (apto abuelos/cochecito en seco; con lluvia la arcilla resbala).
- **Loop:** caseta amarilla (entrada del parque, cerca del muelle) → **derecha (T1)** = Praia Preta + ruinas del Lazareto + Praia do Galego → **2ª bifurcación** = piscinas naturales (poção) + acueducto → **en el acueducto GIRÁS y volvés a Abraão**. Seguir derecho = te metés en **Feiticeira** (mucho más largo).
- **Lazareto:** estructura del **s.XIX** (SIN las fechas 1884–1913, removidas — Ricardo confirmó solo "s.XIX"). **Cuarentena de inmigrantes + leprosario = HECHOS**; **"cárcel de esclavizados que entraban por la isla" = LEYENDA** ("dicen que").
- **Llevar agua** (+ víveres si se quedan en la playa): **todo salvaje, sin quioscos/tiendas/nada**.

**Lopes Mendes (T10+T11) — confirmado (no re-cambiar):**
- **~7,2 km / 2h30–3h15** ida · moderada-difícil · pasa por Palmas (T10 sombreado). Extremo desierto vía **T10+T12 (~4 km)**.
- **Jugada clave:** caminar para un lado y **volver en barco** (deja cerca de Pouso → ~1 km/30–40 min por T11; pulsera oficial antes de salir). Precios/horarios del barco **solo en la guía de PLAYAS** (link), no duplicar. Playa de preservación, **casi sin infraestructura** (NO decir "sin quioscos" — hay un par de ranchos rústicos).

**Seguridad / qué llevar + CF vs lancha — confirmado por Ricardo (no re-cambiar):**
- **Salud:** muchos mosquitos pero **sin endemias ni brotes** → repelente + protector. **Dinero:** no cajeros, FX malo; **no hace falta efectivo para la vuelta** (barco con tarjeta, te cobran en Abraão); límite diario; **súper pacífico** (sin scams/robos).
- **Taxa Viva (~8 €):** pagarla, **NO esquivarla** por embarque clandestino (una contravención cuesta mucho más). Ricardo no está de acuerdo con la tasa pero "todo dentro de la ley".
- **Respeto/racismo (LIVE, framing aprobado):** Brasil diverso (mayoría negra/mestiza), vive en paz; "vení con respeto, te reciben como familia"; el racismo es delito serio = **bienvenida + protección de la armonía**, NO sermón. (Ricardo: detesta el racismo, las penas en Brasil son altísimas; lo quiso poner elocuente y sin asperezas.)
- **Comprar paseos:** **agencia física, firmar adentro**, no por la calle/teléfono; **confirmar el tipo de embarcación**.
- **🚤 CF vs lancha (apartado en PLAYAS, sección Paseos en barco):** **CF** = casco largo/finito ("anchoa"), ágil, **1 motor**, se mueve con cada ola (todos los taxi-boats son CF; bien para tramos cortos). **Lancha** = más estable/segura, mantenimiento fiscalizado, cuesta un poco más. **Vuelta a la Isla → lancha** (no taxi-boat). Cada uno su uso. "CF" = término local, no inventar sigla.
- **Cortesías:** propina **10% serviço** ya en la cuenta (extra opcional, no esperado; sacar/reembolsar solo si muy mal atendido; rechazar mal visto) · **no sonarse la nariz en la mesa** · la palabra es **"banheiro"** · **baños públicos limpísimos en el muelle Santa Luzia (Angra)**.
- **Reglas de reserva:** prohibido **fuego/barbacoa/vender/ofrecer servicios en la playa**; punido por ley; público tranquilo (no joda/yates).

## 6. DÓNDE QUEDAMOS / PRÓXIMO PASO INMEDIATO
**GUÍA DE SENDEROS — COMPLETA ✅** (mismo método que playas). En `src/content/guides/trails.<lang>.md`: 5 senderos (Lopes Mendes, Dois Rios, Feiticeira, Pico do Papagaio, Circuito Histórico T1) + Seguridad/qué-llevar + planificador de cierre + tabla T1–T16. Los 7 tópicos del arco, hechos y LIVE.

**Arco acordado (uno por uno):** Pico do Papagaio → Dois Rios → Feiticeira → Circuito Histórico T1 → Lopes Mendes (liviano) → Seguridad/qué llevar → "qué sendero es para vos" (planificador).

**✅ TÓPICO 1 — Pico do Papagaio: HECHO y LIVE** (commit `4351aad`, 2026-06-24). Reescrito feeling-first en los 4 idiomas: ficha rápida → narrativa "salís 2 AM" → tabla **día sin guía vs amanecer con guía** → bloque práctico único (guía/CADASTUR/reserva/médico/costo/bastones) → "qué evitar" (×3) → cierre poético + time-lapse. Focus group 9/12 "loved", 0 rebotes, dwell ~150s. Datos confirmados → ver §5.

**✅ TÓPICO 2 — Dois Rios: HECHO y LIVE** (commit `2b36283`, 2026-06-24). Reescrito feeling-first: apertura "Uncharted 4" → ficha rápida → historia con anclas → bloque único de la **vuelta** (sin barco fijo, R$150–200, salir 15:30) + día tipo → "qué evitar" (atajo/barco/demora). Focus group 12/12 engaged-o-loved, dwell ~150s. Datos confirmados → ver §5.

**✅ TÓPICO 3 — Feiticeira: HECHO y LIVE** (commit `7283b8b` + corrección distancia `afefaf1`, 2026-06-24). Reescrito feeling-first: apertura "selva = sauna → cascada redentora" → ficha rápida → **tabla de ruta tramo a tramo** (desambigua las 2 bifurcaciones izq) → vuelta fácil en barco R$35 (contraste con Dois Rios) → "qué evitar" (15:30/repelente+calzado/no repetir cascada). Lazareto agregado al montar; distancia corregida a **3,9/5,4 km**. Focus group 12/12 engaged-o-loved. Datos confirmados → ver §5.

**✅ TÓPICO 4 — Circuito Histórico (T1): HECHO y LIVE** (commit `3fbef55`, 2026-06-24). Reescrito feeling-first "la suave": promesa de historia-en-1h-fácil → **Lazareto como corazón** (s.XIX sin fechas; cuarentena+leprosario hechos, esclavos leyenda) → **tabla del loop simple** (gira en el acueducto = ~3km/~1h; seguir = Feiticeira) → cierra en la atmósfera de las ruinas. Quitadas las fechas viejas 1884–1913. Focus group 12/12 loved-o-engaged. Datos confirmados → ver §5.

**✅ TÓPICO 5 — Lopes Mendes: HECHO y LIVE** (commit `9cfc66d`, 2026-06-25). Rework completo (Ricardo dijo "subi nomás" → armado desde datos ya confirmados, sin dictado nuevo). Apertura por la sensación (la selva te entrega la playa) → ficha rápida → "caminá para un lado, volvé en barco" (sin precios, link a PLAYAS) → tip del extremo desierto T10+T12. Corregido un sobre-dato ("casi sin infraestructura", no "sin quioscos"); links a playas por idioma. Focus group 4 loved / 8 engaged / 0 neg. Datos → ver §5.

**✅ TÓPICO 6 — Seguridad / qué llevar (+ CF vs lancha): HECHO y LIVE** (commit `ed919c7`, 2026-06-25). Reescrita la sección de seguridad de senderos (En el sendero / Salud / Dinero / Taxa Viva / Reservar paseo / **orgullo local** [nota racismo, framing aprobado] / **propina y cortesías** / reglas de reserva) + nuevo apartado **CF vs lancha** en PLAYAS (tabla + anchoa + Lagoa Azul). Focus group con lector de "sensibilidad" para la nota del respeto. ⚠️ Esta vez los agentes editaron los archivos directos (raro; contenido revisado y OK). Datos → ver §5.

**✅ TÓPICO 7 — "¿Qué sendero es para vos?": HECHO y LIVE** (commit `830f7ff`, 2026-06-25). Ricardo dijo "armalo y subilo directo" → armado desde los datos confirmados de los 5 senderos. Router de una mirada (tabla **perfil → sendero** con tags Tiempo+Esfuerzo) + atajo "¿Apurado?" + **Dois Rios = "Elección del editor"** + 3 desempates (más duro=Pico, más solitario=Dois Rios, #1 de Ricardo=Dois Rios) + reconcilia favorito-vs-principiante (Dois Rios es el #1 pero día entero; primerizos/familia → T1). Insertado **antes** de la tabla de red T1–T16 (apéndice). Focus group con planner/scanner/firsttimer.

**🏁 GUÍA DE SENDEROS COMPLETA — 7/7 LIVE en los 4 idiomas.** Los 5 senderos reescritos feeling-first + sección de Seguridad/qué-llevar + el planificador de cierre. (Apartado CF-vs-lancha también agregado a PLAYAS.) **No hay tópico pendiente de senderos.**

**👉 PRÓXIMO PASO (decidido por Ricardo, 2026-06-25):** **FAQ es la prioridad** (poner más preguntas). Después, dos tópicos FÁCILES que Ricardo dictará: **Islas de Angra** (cómo son las playas) y **pilar comida** (2–3 restaurantes). **El mapa de playas queda PARKED** (el actual está bien; lo rehace él en Photoshop, es lo último — NO mostrarlo como pendiente). Ver §7.

## 7. Roadmap / pendientes
- **✅ Guía de senderos COMPLETA** (7/7 LIVE — ver §6).
- **Datos de Ricardo aún abiertos (no inventar):** modelo de reserva de paseos (anticipada/diaria/almuerzo) si se quiere detallar; confirmar si la escuna R$35/R$70 es por persona.
- **✅ FAQ — 8 nuevas LIVE** (commit `e23b18d`, 2026-06-25). En el `faq:` frontmatter de `faq.<lang>.md` (schema FAQPage + acordeón visible): cuántos días/day-trip · no hay autos/cómo moverse · chicos+mayores+movilidad (honesta) · vida nocturna · reglas+UNESCO · barco con tarjeta · inglés/portugués · snorkel+Meros. Focus group con lector de **sensibilidad** para las dos delicadas. **Datos nuevos confirmados (no re-cambiar):**
  - **Vida nocturna SÍ existe** (yo la tenía mal): concentrada **~1 km por la playa** (la reserva no deja polución sonora): **~5 bares + 1 boliche** a ~50 m (bar flotante reggae/vivo, lounge electrónica, uno chic, uno cenar+shows, disco). Resto del pueblo, tranquilo. **NO mencionar drogas.**
  - **Snorkel:** Lagoa Azul/Verde (peces acostumbrados) + **favorito de Ricardo = Meros** (bahía grande, hipnótico, peces sociables que mordisquean).
  - **Ilha Grande = Patrimonio Mundial UNESCO** ("Paraty e Ilha Grande", 2019). Reglas playa: + no basura, no dar de comer a animales, no perros.
  - **Chicos/movilidad (honesto):** NO apto para menores ~10 ni movilidad muy reducida; sí para familias con 10–12+ que caminen. (Fusionadas las dos preguntas.)
  - **Seguridad:** muy seguro, pero **NUNCA publicar número de policías** (Ricardo: invita delincuentes). Inglés poco hablado: confirmar precios, elegir lugares que hablen tu idioma.
- **✅ Islas de Angra (Ilhas Paradisíacas) — LIVE** (commit `73e43ad`, 2026-06-25). Reescrita la sección en prosa `### The Angra islands...` de **PLAYAS** (`beaches.md`, dentro de Paseos en barco; los datos del directorio siguen en `beaches28.ts`). Feeling-first, stop by stop. **Datos confirmados (no re-cambiar):** tour **Ilhas Paradisíacas** (sale de Abraão, día de sol pleno, ~1h/parada) · **Cataguás** (4 islotes, cruzás caminando con agua al torso si llegás temprano; turquesa, favorita) · **Praia do Dentista (Ilha da Gipóia)** la más linda, verde esmeralda, larga · **la palmera** centenaria rota por unos jóvenes → callout de cuidar el patrimonio ajeno (sin insultos) · **Botinas** top snorkel **pero** oleaje artificial por tráfico de lanchas · **Ilha da Piedade** la menos linda pero simbólica = **"Ilha de Caras"** (30 años de la revista) · **Praia de Flechas** alternativa con restaurante (algunos paseos la cambian por Piedade). Precios/horarios NO en la prosa (están en la tabla de paseos).
- **✅ Pilar COMIDA — NUEVO PILAR LIVE** (commit `2087fdf`, 2026-06-25). **Página nueva** `food.<lang>.md` ("Dónde comer / Where to eat"). Cableado completo a mano: `src/i18n/routes.ts` (slugs `where-to-eat-ilha-grande`/`ou-manger`/`onde-comer`/`donde-comer`), `src/i18n/ui.ts` (`nav_food` ×4), `Footer.astro` (link), `HomePage.astro` (**tarjeta ⑦** terracota `#B5532E`). translationKey `food` vincula los 4. Build 33→37 páginas. **Datos confirmados (no re-cambiar):**
  - **Banana da Terra** (económico): atendido por sus **2 dueñas**, comida casera, el **tempero**, el **único lugar para una buena feijoada**, porciones generosas. (Online figura otra calle que la "Rua do Cemitério" que dijo Ricardo → **NO se publica dirección**, solo nombre + Google Maps.)
  - **Dom Mário** (media-alta, para una pareja joven): chef **Dom Mário** a cargo (consistencia); salmón en salsa de hierbas, pulpo, filé mignon, pescados locales; **molho de maracujá**, carpaccio (⚠️ era "gazpacho" por error de dictado, corregido 2026-08-19), **rösti**, verduras grilladas. No tan caro para la calidad.
  - **Orden y caiçara (2026-08-19, pedido de Ricardo):** en la página va **Dom Mário PRIMERO** y **Banana da Terra segundo**, presentada como la opción económica **caiçara** (con ç — cultura caiçara, tradición brasileña de esta costa). Aplicado en los 4 idiomas.
  - Regla: **se nombran restaurantes** (a diferencia de operadores de barco); **sin precios/horarios/dirección inventados** (el focus group los pidió, el director los omitió). Tono honesto, "buscá en Google Maps".
- **Cómo agregar un pilar nuevo (receta, para la próxima):** (1) `routes.ts` +slugs · (2) `ui.ts` +`nav_X` en el type union y en los 4 idiomas · (3) `Footer.astro` +link · (4) `HomePage.astro` +tarjeta (con `bg`/`fg`) · (5) crear `<colección>.<lang>.md` con frontmatter (title/description/lang/slug/translationKey/updatedDate/author). La ruta sale sola (glob loader).
- **🅿️ Mapa de playas — PARKED (último, NO mostrar como pendiente):** el actual **está bien así**. Ricardo lo va a rehacer él en Photoshop más adelante; es lo último y lleva su tiempo. No re-ofrecerlo.
- **✅ Nombre del autor = "Ricardo Aparicio"** (era "Richard", error de placeholder; corregido en TODO el sitio el 2026-06-26, commit `ce8596f`, 62 menciones/36 archivos). Híbrido: voz cálida = "Ricardo"; autoría/schema/footer = "Ricardo Aparicio". **NUNCA decirle "Richard".**
- **🔍 SEO/GEO — estado (2026-06-26):** Ricardo **YA está dado de alta** en Google Search Console + Bing (NO re-ofrecerlo). **El sitemap es mantenimiento CERO:** lo genera el build (`@astrojs/sitemap` en `astro.config.mjs`, con i18n/hreflang), se regenera en cada deploy con las 37 páginas, y Google/Bing lo re-leen solos — **NO hay que actualizarlo ni re-enviarlo** al agregar páginas. Técnica impecable (robots invita a buscadores+IA, hreflang 4 idiomas en `<head>`, JSON-LD FAQPage/Article/Organization). Cuello de botella: **indexación + autoridad + tiempo** (en el diagnóstico casi nada estaba indexado aún; es normal para un sitio joven). Acelerar: en Search Console "Solicitar indexación" de páginas nuevas. **Backlinks:** OK pousadacostaverde.com → visitilhagrande.com; **NO** armar PBN/auto-red (riesgo de penalización). Claude puede: colocar meta-tags de verificación si hicieran falta, y correr chequeos de indexación/ranking periódicos.
  - **Progreso 2026-06-26:** la **home YA está indexada** (✅ confirmado en GSC). Sitemap "Correcto", 32 descubiertas (será 37 cuando re-lea — agregadas 4 de comida). Ricardo empezó a "Solicitar indexación" página por página pero **excedió la cuota diaria**.
  - **⏰ PENDIENTE para mañana (recordárselo a Ricardo):** pedir indexación de `https://visitilhagrande.com/how-to-get-to-ilha-grande/` (primaria EN) + `https://visitilhagrande.com/fr/ou-manger-ilha-grande/` (comida FR nueva). **Regla acordada:** a mano solo EN+ES de pilares + las 4 de comida; **FR/PT y secundarias se dejan a Google** (no gastar cuota). Indexar los 4 idiomas SÍ vale la pena, pero NO a mano.
- **NO es parte de este proyecto:** el ecommerce de paseos (proyecto futuro/aparte de Ricardo, condicionado a montar un sistema). Por eso la guía **no nombra operadores** ni mete reservas ("preguntame a mí").

## 9. PANEL CRÍTICO + OPERATIVO EJECUTADO (2026-07-01)
**Panel de 4 críticos duros** (editor 6/10, SEO 5/10, arte 4/10, estratega 6/10). **Veredicto: NO congelar, pero congelar contenido nuevo 90 días** — 90% de horas a DISTRIBUCIÓN, 10% a diseño. **Gate: 1 de octubre 2026** (si nada se mueve tras distribución real → freeze). Detalle y drafts → `docs/OUTREACH.md`.

**Ejecutado y LIVE (commits `940dad5` y anteriores):**
- **OG cards**: og:/twitter: meta en BaseLayout + 9 postales 1200×630 en `public/og/` (mapping por translationKey en `[...slug].astro`). Links compartidos = postal, no URL pelada.
- **llms.txt corregido** (Ricardo Aparicio + entrada de comida). **Person sameAs** → pousadacostaverde.com.
- **Limpieza de contenido (4 idiomas):** autoreferencias de reserva FUERA (neutral: "cualquier agencia de la orla", sin nombrar operadores — regla intacta); símil duplicado de trails arreglado (queda solo el del Pico); cortesías (propina/nariz/banheiro/Santa Luzia) movidas de trails-seguridad a **FAQ (+2 entradas por idioma, ahora 17)**; Taxa Viva en trails achicada a 2 frases + link a FAQ (el detalle vive SOLO en FAQ).
- **Fotos GRANDES:** imágenes de artículos rompen a min(92vw, 58rem) (patrón .island-map), max-height 34rem cover.
- **Kit impreso:** `print/mapa-checkin-A4.html` (mapa numerado + QR + CTA 4 idiomas) + 2 QR con UTM (`utm_source=pousada|tickets`) — medibles en **Cloudflare Web Analytics (ya instalado, beacon en BaseLayout)**.
- **NO hecho a propósito:** partir beaches en 3 URLs (invasivo; "solo lo estrictamente necesario"), nombrar operadores (regla de Ricardo), rediseño del mapa (PARKED, lo hace él en Photoshop).

**✅ DISTRIBUCIÓN EJECUTADA (2026-07-02, sesión navegador con Ricardo mirando):**
- **Cloudflare Crawler Hints: ON** (= IndexNow; avisa a Bing/Yandex en cada deploy). ⚠️ El toggle "Managed robots.txt" de AI Crawl Control debe quedar **OFF** (inyectaría señales anti-IA — contrario a la estrategia).
- **AI Crawl Control verificado: NINGÚN bot de IA bloqueado.** Datos de 24h (2026-07-02): 171 requests de IA (+23%), 150 permitidas; **ChatGPT-User = 70/día (¡ChatGPT YA lee el sitio para responder a usuarios!)**, OpenAI 80, ClaudeBot 14 (+100%), Amazon 15, Meta 14, Google 9, BingBot 6, Perplexity 4. La tesis GEO de Ricardo ya corre sola.
- **Bing Webmaster: visitilhagrande.com YA estaba verificado** (también pousadacostaverde.com, que tiene sección "AI Performance"). **Sitemap `sitemap-index.xml` enviado explícitamente el 2/7/2026** (estado: Procesando; antes 32 URLs descubiertas → pasará a 37).
- Rutas de indexación IA: ChatGPT←Bing ✅ · Perplexity←bot propio ✅ · Claude←ClaudeBot ✅ · Gemini←Google (en curso).
- Falta de la checklist de OUTREACH.md: GBP → link, pousadacostaverde.com → link, imprimir lámina A4, snippet WhatsApp Tickets, drafts Wikivoyage/Reddit, y las 2 indexaciones pendientes de GSC.

- **✅ Backlink pousada→guía: YA EXISTÍA** (verificado 2026-07-02): la home viva de pousadacostaverde.com linkea a visitilhagrande.com 5 veces (nav "Guia da ilha", proof-chip, deep-link a como-chegar, footer). ⚠️ OJO: el sitio VIVO de la pousada es el NUEVO (custom, con esos links) — hay un **WordPress dormido** en el mismo public_html que NO sirve la home (no tocarlo; un intento de editar su footer Astra fue abortado). El índice del ecosistema dice "web_posada sin desplegar" — está desactualizado.
- **✅ GBP post publicado** (2026-07-02): publicación bilingüe PT+EN en el perfil de Pousada Costa Verde con botón "Más información" → visitilhagrande.com/?utm_source=gbp&utm_medium=post&utm_campaign=pousada.
- **✅ Lámina A4 lista para imprimir**: `print/mapa-checkin-A4.pdf` (sobria) y **`print/mapa-checkin-A4-premium.pdf`** (marco acuarela Higgsfield nano_banana + mapa real + QR real intactos, 300dpi). Regla respetada: mapa/QR NUNCA por IA generativa.
- **✅ Pilar nuevo "Ilha Grande desde/hacia la isla" (4 idiomas, 2026-07-13)** — translationKey `arrival`, localizado por origen (NO traducción literal): ES `ilha-grande-desde-argentina` (dólar tarjeta/Pix/Belo, Córdoba+Rosario, ómnibus "nave espacial", Chile) · PT `ilha-grande-saindo-do-rio` (Rio/SP, sin drama cambiario) · EN `rio-de-janeiro-to-ilha-grande` · FR `de-rio-de-janeiro-a-ilha-grande` (EN/FR: Pix + no DCC + no cajero). Cross-link recíproco desde cada pilar getting-there. Escrito con el **equipo agéntico del blog** (redacción→localización→panel SEO/voz→director). El panel cazó un error fáctico (Impuesto PAIS: se eliminó a **fines de 2024**, no 2026). Datos canónicos fijados por Ricardo: hablar en **NOCHES** (mín 5 / ideal 7+); vuelos directos a Río desde BUE/Córdoba/Rosario; error #1 del argentino = creer que "está todo cerca" (eje Río+norte Búzios/Arraial/Cabo Frio vs Río+sur Ilha Grande/Paraty); NADA de Mangaratiba; transparencia mínima (solo autoría + backlink, sin pitch de servicio); "vacaciones = tiempo de calidad" (prohibido "lo más valioso que tenés"). **Ricardo vive en la isla desde el 29/09/2019 = "casi siete años"** (unificado con About). ⚠️ Gotcha del workflow: los subagentes leen archivos EN DISCO — el "director" confundió versiones viejas con lo generado; verificar SIEMPRE el journal.jsonl / los archivos escritos, no el veredicto del director.

**🟡 EN PRUEBA (2026-07-18, working tree SIN pushear — esperando OK de Ricardo por pieza):**
- **Drafts de legibilidad** (equipo agéntico, 9 artículos auditados): 5 corregidos en working tree (getting-there, from-argentina, where-to-stay, trails, beaches — 4 idiomas c/u); best-time/faq/food/about quedaron sanos sin tocar. Verificación anti-invención hecha a mano: se restauraron números inventados en trails (Feiticeira/Circuito) y se revirtió un "~100 km" (Mangaratiba) no verificado. Backup de drafts en docs/drafts-legibilidad/.
- **2 pilares NUEVOS del top-3 de mercado** (build: 49 páginas): `itineraries` (itinerario-ilha-grande / ilha-grande-itinerary / roteiro-ilha-grande / itineraire-ilha-grande) y `money` (como-pagar-en-ilha-grande / paying-in-ilha-grande / como-pagar-ilha-grande / payer-a-ilha-grande). Escritos SOLO con la ficha de 86 hechos extraída del sitio (verificado: cero números fuera del acervo). hreflang/switcher OK. Falta: OK de Ricardo → push → nav/footer/llms.txt → indexación GSC ES+EN.
- **Upgrade "cómo llegar" pendiente de DATOS de Ricardo**: docs/drafts-nuevos/upgrade-como-llegar.md tiene la tabla de puertos con celdas ⚠️PENDIENTE + **entrevista de 22 preguntas** (cancelaciones por mal tiempo, márgenes pre-vuelo, estacionamientos, verificación de precios) + 13 preguntas de los redactores (Caipirinha precio, Passeio do Índio, museo Dois Rios, primeras lanchas de salida, efectivo recomendado, Pix para extranjeros). Responder por audio y el equipo integra.
- **Informe de mercado**: docs/INTELIGENCIA-MERCADO-2026-07.md (47 preguntas insatisfechas + 28 competidores + top-5). Oportunidades 4 y 5 (lluvia/feriados, comparativas) quedan para después.

- **✅ UPGRADE "cómo llegar" COMPLETO (2026-07-18, en working tree, sin pushear):** Ricardo respondió la entrevista de 22 preguntas por audio. Datos canónicos NUEVOS (fuente: `docs/drafts-nuevos/ficha-ricardo-como-llegar.md` — MANDA sobre versiones viejas): Conceição ~130 km / **20 min** / mar calmo; Angra ~160 km / 30 min / lanchas Santa Luzia + barca Cais da Lapa; Mangaratiba ~106 km / 1h30 / **R$22,50** / única ida ~08:00; lancha **R$80 baja / R$100 alta**; salidas cada 1 h de ~8 a ~18/18:30; **NO hay compra online de pasajes**; transfer R$200 (alta R$250), 3 ventanas (5:45-7:45 / 8-10:45 / 11-14:45), ~3 h baja / 3:30-4 alta, muelle privado, valija grande +R$100; estacionamiento en los 3 puertos cubierto/descubierto **R$35/día (alta R$50)** con valet, ~7-18 h, recomendación **Dois Irmãos (Angra, William)**; **cancelaciones: 2 en casi 7 años** (barcos 50 pax 2x300 hp, bahía protegida, isla a 21 km; taxi boat cae primero; sin colchón de noches; nadie queda varado); vuelos: low-cost argentinas se reprograman seguido → mejor vuelo de madrugada (decisión editorial: sin nombrar aerolíneas ni %); ClickBus para buses; rodoviária Angra a 2 km del muelle (Uber ~R$15); error #1 del huésped: no preguntar por early check-in/late check-out (publicado generalizado). Pilar reescrito en 4 idiomas + duración de transfer corregida en los 4 "arrival". Todo verificado contra lista negra de datos viejos (15 min, R$20, 135/150 km, 3,5-4,5 h eliminados).

**⏰ CHECKLIST DE RICARDO (dashboards, ver OUTREACH.md §1):** Bing "Import from GSC" · Cloudflare Crawler Hints ON (=IndexNow) · GBP → link a la guía · pousadacostaverde.com → link a la guía · imprimir la lámina A4 · snippet WhatsApp en Tickets · postear drafts de Wikivoyage/Reddit. **+ pendiente GSC:** pedir indexación de how-to-get (EN) y ou-manger (FR) — cuota excedida el 26-jun.

## 8. Otros proyectos del usuario (contexto, no tocar acá)
geo-monitor (D:\cursor\geo-monitor), vart, Daily Dose, guide.pousadacostaverde.com — ver el índice de memoria `MEMORY.md`.

---
*Última sesión: **GUÍA DE SENDEROS COMPLETADA — 7/7 LIVE** en los 4 idiomas. Pico do Papagaio (`4351aad`), Dois Rios (`2b36283`), Feiticeira (`7283b8b`+`afefaf1`), Circuito Histórico T1 (`3fbef55`), Lopes Mendes (`9cfc66d`), Seguridad/qué-llevar + CF-vs-lancha en PLAYAS (`ed919c7`) y el planificador de cierre "¿qué sendero es para vos?" (`830f7ff`). Todo feeling/clarity-first. Después: **8 FAQ nuevas** en la página de FAQ (`e23b18d`) — incluida la corrección de "vida nocturna" (sí existe), Meros, UNESCO y las dos sensibles (chicos/movilidad e inglés) ok'd por Ricardo. Método: dictado de Ricardo → Workflow (equipo+focus group 12, con lector de sensibilidad cuando toca) → render en su Chrome → push → verificar en vivo (con `-L`, ojo redirect trailing-slash). Después: **Islas de Angra / Ilhas Paradisíacas** reescritas en PLAYAS (`73e43ad`) y **pilar COMIDA nuevo** ("Dónde comer", Banana da Terra + Dom Mário, página + tarjeta ⑦ en la home, `2087fdf`). **Los 3 fáciles que pidió Ricardo (FAQ + Islas de Angra + Comida) → HECHOS.** Pendiente solo: **mapa de playas = PARKED** (lo rehace él en Photoshop). Próximo: lo que Ricardo quiera. Ver §7.*
