export const exercises = [
  {id:'wall-pushup',name:'Wall Push-up',cat:'Push',level:1,equipment:'Wand',muscles:'Brust, Trizeps, Schulter',steps:['Hände schulterbreit an die Wand.','Körper als feste Linie halten.','Brust kontrolliert zur Wand führen und wegdrücken.'],cue:'Ellbogen etwa 30–45° zum Oberkörper.',reg:'Höher und aufrechter stehen.',prog:'Incline Push-up'},
  {id:'incline-pushup',name:'Incline Push-up',cat:'Push',level:1,equipment:'Bank/Tisch',muscles:'Brust, Trizeps, Schulter',steps:['Hände auf stabile Erhöhung setzen.','Rumpf und Gesäß fest anspannen.','Brust zur Kante senken und vollständig ausdrücken.'],cue:'Keine Hüfte durchhängen lassen.',reg:'Höhere Erhöhung.',prog:'Knee Push-up'},
  {id:'knee-pushup',name:'Knee Push-up',cat:'Push',level:1,equipment:'Keine',muscles:'Brust, Trizeps, Schulter',steps:['Knie auf den Boden, Hände unter den Schultern.','Gerade Linie von Knie bis Kopf halten.','Brust Richtung Boden senken und hochdrücken.'],cue:'Bauch fest, Schulterblätter kontrollieren.',reg:'Incline Push-up.',prog:'Push-up'},
  {id:'pushup',name:'Push-up',cat:'Push',level:2,equipment:'Keine',muscles:'Brust, Trizeps, Schulter, Core',steps:['Stützposition mit Händen knapp außerhalb der Schultern.','Körper als Brett absenken.','Bis nahe Boden kontrollieren und aktiv ausstrecken.'],cue:'Rippen unten, Gesäß angespannt.',reg:'Incline/Knee Push-up.',prog:'Decline Push-up'},
  {id:'diamond-pushup',name:'Diamond Push-up',cat:'Push',level:3,equipment:'Keine',muscles:'Trizeps, Brust, Schulter',steps:['Hände eng unter der Brust platzieren.','Rumpf stabil halten.','Kontrolliert absenken und kraftvoll hochdrücken.'],cue:'Ellbogen nicht aggressiv nach außen drehen.',reg:'Enger Incline Push-up.',prog:'Pseudo Planche Push-up'},
  {id:'decline-pushup',name:'Decline Push-up',cat:'Push',level:3,equipment:'Bank',muscles:'Obere Brust, Schulter, Trizeps',steps:['Füße erhöht, Hände am Boden.','Körperlinie halten.','Brust kontrolliert zum Boden senken und drücken.'],cue:'Je höher die Füße, desto schwerer.',reg:'Push-up.',prog:'Pike Push-up'},
  {id:'pike-pushup',name:'Pike Push-up',cat:'Push',level:3,equipment:'Keine',muscles:'Schulter, Trizeps',steps:['Hüfte hoch in umgekehrtes V.','Kopf schräg vor die Hände senken.','Über Schultern und Trizeps hochdrücken.'],cue:'Unterarme möglichst senkrecht.',reg:'Hände erhöht.',prog:'Feet-elevated Pike Push-up'},
  {id:'elevated-pike',name:'Feet-elevated Pike Push-up',cat:'Push',level:4,equipment:'Bank',muscles:'Schulter, Trizeps',steps:['Füße erhöht, Hüfte über Schultern bringen.','Kopf kontrolliert vor die Hände senken.','Stark in den Boden drücken.'],cue:'Mehr vertikale als horizontale Bewegung.',reg:'Pike Push-up.',prog:'Handstand Push-up'},
  {id:'bench-dip',name:'Bench Dip',cat:'Push',level:2,equipment:'Bank',muscles:'Trizeps, Brust',steps:['Hände hinter dem Körper auf Bank.','Schultern tief halten.','Ellbogen beugen und wieder strecken.'],cue:'Nur schmerzfreie Tiefe nutzen.',reg:'Knie stärker beugen.',prog:'Parallel Bar Dip'},
  {id:'support-hold',name:'Parallel Bar Support Hold',cat:'Push',level:2,equipment:'Barren',muscles:'Schultergürtel, Trizeps, Core',steps:['Oben auf den Barren abstützen.','Ellbogen strecken und Schultern nach unten drücken.','Körper ruhig halten.'],cue:'Nicht in den Schultern einsinken.',reg:'Füße leicht unterstützen.',prog:'Dip Negative'},
  {id:'dip-negative',name:'Dip Negative',cat:'Push',level:3,equipment:'Barren',muscles:'Brust, Trizeps, Schulter',steps:['Oben in Stützposition starten.','3–5 Sekunden kontrolliert absenken.','Mit Füßen zurück nach oben helfen.'],cue:'Schulter bleibt stabil und schmerzfrei.',reg:'Support Hold.',prog:'Parallel Bar Dip'},
  {id:'dip',name:'Parallel Bar Dip',cat:'Push',level:4,equipment:'Barren',muscles:'Brust, Trizeps, Schulter',steps:['Im stabilen Stütz starten.','Kontrolliert absenken, Schultern aktiv.','Bis zur sauberen Tiefe und wieder hochdrücken.'],cue:'Kein Schwung aus den Beinen.',reg:'Band- oder Fußunterstützung.',prog:'Straight Bar Dip'},
  {id:'straight-bar-dip',name:'Straight Bar Dip',cat:'Push',level:4,equipment:'Stange',muscles:'Brust, Trizeps, Schulter',steps:['Oberhalb einer Stange abstützen.','Brust leicht über die Stange bringen.','Kontrolliert absenken und hochdrücken.'],cue:'Stange nah am Körper halten.',reg:'Parallel Bar Dip.',prog:'Muscle-up Transition'},
  {id:'scap-pushup',name:'Scapular Push-up',cat:'Push',level:1,equipment:'Keine',muscles:'Serratus, Schulterblattkontrolle',steps:['Hohe Plank mit gestreckten Ellbogen.','Brust zwischen die Schultern sinken lassen.','Boden wegdrücken und Schulterblätter auseinander führen.'],cue:'Ellbogen bleiben gestreckt.',reg:'An der Wand.',prog:'Push-up Plus'},

  {id:'dead-hang',name:'Dead Hang',cat:'Pull',level:1,equipment:'Klimmzugstange',muscles:'Griff, Schulter',steps:['Stange sicher greifen.','Körper ruhig hängen lassen.','Atmen und Griff halten.'],cue:'Bei Schulterbeschwerden nur aktive, schmerzfreie Position.',reg:'Füße leicht aufsetzen.',prog:'Active Hang'},
  {id:'active-hang',name:'Active Hang',cat:'Pull',level:1,equipment:'Klimmzugstange',muscles:'Lat, Schulterblatt',steps:['Im Hang starten.','Ohne Ellbogenbeugung Schultern nach unten ziehen.','Kurz halten und kontrolliert lösen.'],cue:'Bewegung kommt aus den Schulterblättern.',reg:'Teilbelastung mit Füßen.',prog:'Scapular Pull-up'},
  {id:'scap-pullup',name:'Scapular Pull-up',cat:'Pull',level:2,equipment:'Klimmzugstange',muscles:'Lat, Trapez, Schulterblatt',steps:['Im Hang starten.','Schulterblätter nach unten/hinten ziehen.','Körper wenige Zentimeter anheben, Ellbogen gestreckt.'],cue:'Klein, sauber, ohne Schwung.',reg:'Active Hang.',prog:'Pull-up Negative'},
  {id:'body-row-high',name:'High Body Row',cat:'Pull',level:1,equipment:'Niedrige Stange/Ringe',muscles:'Rücken, Bizeps',steps:['Körper unter hoher Stange positionieren.','Rumpf fest halten.','Brust zur Stange ziehen und langsam ablassen.'],cue:'Je aufrechter, desto leichter.',reg:'Aufrechter stehen.',prog:'Body Row'},
  {id:'body-row',name:'Australian Row',cat:'Pull',level:2,equipment:'Niedrige Stange/Ringe',muscles:'Rücken, Bizeps, hintere Schulter',steps:['Körper schräg unter die Stange.','Fersen am Boden, Körper gerade.','Brust zur Stange ziehen.'],cue:'Schulterblätter zuerst bewegen.',reg:'Stange höher.',prog:'Feet-elevated Row'},
  {id:'feet-row',name:'Feet-elevated Row',cat:'Pull',level:3,equipment:'Stange + Bank',muscles:'Rücken, Bizeps',steps:['Füße erhöhen, Körper horizontal.','Brust zur Stange ziehen.','Langsam vollständig strecken.'],cue:'Hüfte nicht absinken lassen.',reg:'Australian Row.',prog:'Archer Row'},
  {id:'pullup-negative',name:'Pull-up Negative',cat:'Pull',level:2,equipment:'Klimmzugstange',muscles:'Lat, Bizeps, Rücken',steps:['Mit Hilfe in obere Position kommen.','Kinn über Stange starten.','3–8 Sekunden kontrolliert in den Hang senken.'],cue:'Keine abrupten letzten Zentimeter.',reg:'Band Assisted Pull-up.',prog:'Pull-up'},
  {id:'band-pullup',name:'Band Assisted Pull-up',cat:'Pull',level:2,equipment:'Stange + Band',muscles:'Lat, Bizeps, Rücken',steps:['Band sicher befestigen.','Aus aktivem Hang ziehen.','Kinn über Stange, kontrolliert ablassen.'],cue:'Band nur so stark wie nötig.',reg:'Stärkeres Band.',prog:'Pull-up'},
  {id:'pullup',name:'Pull-up',cat:'Pull',level:3,equipment:'Klimmzugstange',muscles:'Lat, Bizeps, Rücken',steps:['Aus kontrolliertem Hang starten.','Brust anheben und Ellbogen nach unten ziehen.','Kinn über Stange, dann vollständig ablassen.'],cue:'Kein Kipping für Kraft-Wiederholungen.',reg:'Band/Negative.',prog:'Chest-to-Bar Pull-up'},
  {id:'chinup',name:'Chin-up',cat:'Pull',level:3,equipment:'Klimmzugstange',muscles:'Bizeps, Lat, Rücken',steps:['Untergriff etwa schulterbreit.','Aus aktivem Hang ziehen.','Kinn über Stange, kontrolliert ablassen.'],cue:'Brust hoch, Beine ruhig.',reg:'Band Assisted Chin-up.',prog:'Weighted Chin-up'},
  {id:'chest-bar',name:'Chest-to-Bar Pull-up',cat:'Pull',level:4,equipment:'Klimmzugstange',muscles:'Lat, oberer Rücken, Bizeps',steps:['Explosiv aus aktivem Hang ziehen.','Brust Richtung Stange führen.','Kontrolliert zurück in den Hang.'],cue:'Erst Höhe, dann Geschwindigkeit.',reg:'Pull-up.',prog:'High Pull-up'},
  {id:'archer-pullup',name:'Archer Pull-up',cat:'Pull',level:5,equipment:'Klimmzugstange',muscles:'Lat, Bizeps, einarmige Zugkraft',steps:['Breiter Obergriff.','Zu einer Hand ziehen, anderer Arm streckt seitlich.','Seiten abwechseln.'],cue:'Nur mit solider Pull-up-Basis.',reg:'Typewriter Pull-up.',prog:'One-arm Pull-up Progression'},

  {id:'air-squat',name:'Air Squat',cat:'Legs',level:1,equipment:'Keine',muscles:'Quadrizeps, Gesäß, Adduktoren',steps:['Füße bequem etwa schulterbreit.','Knie und Hüfte gleichzeitig beugen.','So tief wie kontrolliert möglich, dann aufstehen.'],cue:'Knie folgen der Fußrichtung.',reg:'Box Squat.',prog:'Tempo Squat'},
  {id:'box-squat',name:'Box Squat',cat:'Legs',level:1,equipment:'Stuhl/Box',muscles:'Quadrizeps, Gesäß',steps:['Vor stabile Box stellen.','Hüfte kontrolliert zurück und absetzen.','Ohne Schwung wieder aufstehen.'],cue:'Boxhöhe so wählen, dass Kontrolle bleibt.',reg:'Höhere Box.',prog:'Air Squat'},
  {id:'tempo-squat',name:'Tempo Squat',cat:'Legs',level:2,equipment:'Keine',muscles:'Quadrizeps, Gesäß',steps:['3–5 Sekunden absenken.','Unten kurz stabilisieren.','Kontrolliert aufstehen.'],cue:'Tempo nicht durchfedern.',reg:'Air Squat.',prog:'Pause Squat'},
  {id:'split-squat',name:'Split Squat',cat:'Legs',level:2,equipment:'Keine',muscles:'Quadrizeps, Gesäß',steps:['Ausfallschrittposition einnehmen.','Hinteres Knie Richtung Boden senken.','Über vorderen Fuß hochdrücken.'],cue:'Oberkörper ruhig halten.',reg:'Festhalten.',prog:'Bulgarian Split Squat'},
  {id:'bulgarian',name:'Bulgarian Split Squat',cat:'Legs',level:3,equipment:'Bank',muscles:'Quadrizeps, Gesäß',steps:['Hinteren Fuß erhöht ablegen.','Vorderes Bein kontrolliert beugen.','Über ganzen Vorderfuß hochdrücken.'],cue:'Vorderen Fuß weit genug vor der Bank.',reg:'Split Squat.',prog:'Shrimp Squat'},
  {id:'reverse-lunge',name:'Reverse Lunge',cat:'Legs',level:2,equipment:'Keine',muscles:'Quadrizeps, Gesäß',steps:['Einen Fuß nach hinten setzen.','Beide Knie kontrolliert beugen.','Über vorderes Bein zurückstehen.'],cue:'Ruhiger Oberkörper.',reg:'Kleine Schrittweite.',prog:'Walking Lunge'},
  {id:'cossack',name:'Cossack Squat',cat:'Legs',level:3,equipment:'Keine',muscles:'Adduktoren, Gesäß, Quadrizeps',steps:['Breit stehen.','Gewicht auf eine Seite verlagern und tief beugen.','Andere Seite lang lassen, dann zurück.'],cue:'Nur so tief wie Hüfte und Sprunggelenk erlauben.',reg:'An Stange festhalten.',prog:'Tiefer Cossack Squat'},
  {id:'stepup',name:'Step-up',cat:'Legs',level:2,equipment:'Box/Bank',muscles:'Quadrizeps, Gesäß',steps:['Einen Fuß vollständig auf stabile Box.','Über das obere Bein hochsteigen.','Langsam wieder absenken.'],cue:'Nicht vom unteren Bein abspringen.',reg:'Niedrigere Box.',prog:'High Step-up'},
  {id:'calf-raise',name:'Single-leg Calf Raise',cat:'Legs',level:2,equipment:'Kante optional',muscles:'Wade',steps:['Auf einem Bein stabil stehen.','Ferse maximal kontrolliert anheben.','Langsam absenken.'],cue:'Volle, schmerzfreie Bewegungsamplitude.',reg:'Beidbeinig.',prog:'Deficit Calf Raise'},
  {id:'glute-bridge',name:'Glute Bridge',cat:'Legs',level:1,equipment:'Keine',muscles:'Gesäß, hintere Kette',steps:['Rückenlage, Füße nah zum Gesäß.','Becken anheben und Gesäß anspannen.','Kontrolliert absenken.'],cue:'Nicht ins Hohlkreuz überstrecken.',reg:'Kürzere Haltezeit.',prog:'Single-leg Glute Bridge'},
  {id:'single-glute',name:'Single-leg Glute Bridge',cat:'Legs',level:2,equipment:'Keine',muscles:'Gesäß, hintere Kette',steps:['Ein Bein gestreckt anheben.','Becken über das Standbein hochdrücken.','Langsam senken.'],cue:'Becken bleibt gerade.',reg:'Glute Bridge.',prog:'Nordic Curl Regression'},
  {id:'nordic-neg',name:'Nordic Curl Negative',cat:'Legs',level:4,equipment:'Fixierung',muscles:'Hamstrings',steps:['Knie gepolstert, Füße sicher fixiert.','Körper von Knie bis Kopf gerade.','Sehr langsam nach vorn absenken und mit Händen abfangen.'],cue:'Nur mit wirklich sicherer Fußfixierung.',reg:'Kürzere Reichweite.',prog:'Nordic Curl'},
  {id:'pistol-box',name:'Box Pistol Squat',cat:'Legs',level:3,equipment:'Box',muscles:'Quadrizeps, Gesäß, Balance',steps:['Auf einem Bein vor Box stehen.','Langsam zur Box absenken.','Kontrolliert aufstehen.'],cue:'Boxhöhe progressiv reduzieren.',reg:'Höhere Box + Festhalten.',prog:'Pistol Squat'},
  {id:'pistol',name:'Pistol Squat',cat:'Legs',level:5,equipment:'Keine',muscles:'Quadrizeps, Gesäß, Balance',steps:['Auf einem Bein stehen, anderes nach vorn.','Tief und kontrolliert absenken.','Aus eigener Kraft aufstehen.'],cue:'Mobilität und Kniekontrolle vor Tiefe.',reg:'Box/Counterweight Pistol.',prog:'Pause Pistol Squat'},

  {id:'dead-bug',name:'Dead Bug',cat:'Core',level:1,equipment:'Keine',muscles:'Tiefer Core',steps:['Rückenlage, Hüfte/Knie 90°.','Lendenwirbelsäule sanft am Boden halten.','Gegengleichen Arm und Bein strecken, zurück.'],cue:'Nur so weit strecken, wie der Rücken stabil bleibt.',reg:'Nur Beine oder Arme bewegen.',prog:'Hollow Hold'},
  {id:'plank',name:'Forearm Plank',cat:'Core',level:1,equipment:'Keine',muscles:'Vorderer Core, Gesäß',steps:['Unterarme unter Schultern.','Beine strecken und Gesäß anspannen.','Ruhig atmen und Linie halten.'],cue:'Nicht ins Hohlkreuz sinken.',reg:'Knie am Boden.',prog:'Long-lever Plank'},
  {id:'side-plank',name:'Side Plank',cat:'Core',level:2,equipment:'Keine',muscles:'Seitlicher Core, Schulter',steps:['Seitlich auf Unterarm stützen.','Becken anheben.','Kopf, Rumpf und Beine in Linie halten.'],cue:'Schulter aktiv vom Boden wegdrücken.',reg:'Unteres Knie ablegen.',prog:'Star Side Plank'},
  {id:'hollow-tuck',name:'Tuck Hollow Hold',cat:'Core',level:1,equipment:'Keine',muscles:'Vorderer Core',steps:['Rückenlage, Knie zur Brust.','Schulterblätter anheben.','Lendenwirbelsäule am Boden halten.'],cue:'Position verkürzen bevor der Rücken abhebt.',reg:'Füße näher zum Boden stellen.',prog:'Hollow Hold'},
  {id:'hollow',name:'Hollow Body Hold',cat:'Core',level:3,equipment:'Keine',muscles:'Vorderer Core',steps:['Rückenlage, Rippen nach unten.','Arme und Beine verlängern.','Schulterblätter und Beine knapp über Boden halten.'],cue:'Lendenwirbelsäule bleibt am Boden.',reg:'Tuck Hollow.',prog:'Hollow Rocks'},
  {id:'arch-hold',name:'Arch Hold',cat:'Core',level:2,equipment:'Keine',muscles:'Rückenstrecker, Gesäß',steps:['Bauchlage.','Arme und Beine leicht anheben.','Gesäß anspannen und ruhig halten.'],cue:'Nicht maximal ins Hohlkreuz drücken.',reg:'Nur Arme oder Beine heben.',prog:'Arch Rocks'},
  {id:'knee-raise',name:'Hanging Knee Raise',cat:'Core',level:2,equipment:'Klimmzugstange',muscles:'Bauch, Hüftbeuger, Griff',steps:['Ruhig hängen.','Knie ohne Schwung Richtung Brust ziehen.','Langsam absenken.'],cue:'Becken am oberen Punkt einrollen.',reg:'Captain Chair / liegende Knee Raises.',prog:'Leg Raise'},
  {id:'leg-raise',name:'Hanging Leg Raise',cat:'Core',level:4,equipment:'Klimmzugstange',muscles:'Bauch, Hüftbeuger, Griff',steps:['Im aktiven Hang starten.','Gestreckte Beine kontrolliert anheben.','Ohne Schwung absenken.'],cue:'Erst 90°, später Toes-to-Bar.',reg:'Hanging Knee Raise.',prog:'Toes-to-Bar'},
  {id:'l-sit-tuck',name:'Tuck L-Sit',cat:'Core',level:3,equipment:'Parallettes/Barren',muscles:'Core, Hüftbeuger, Trizeps',steps:['Im Stütz starten.','Knie Richtung Brust ziehen.','Schultern unten und Hüfte zwischen Händen halten.'],cue:'Kurze saubere Holds sammeln.',reg:'Ein Fuß am Boden.',prog:'One-leg L-Sit'},
  {id:'l-sit',name:'L-Sit',cat:'Core',level:5,equipment:'Parallettes/Barren',muscles:'Core, Hüftbeuger, Trizeps',steps:['Stütz mit gestreckten Armen.','Beide Beine waagerecht strecken.','Position mit aktiven Schultern halten.'],cue:'Nicht in den Schultern einsinken.',reg:'Tuck/One-leg L-Sit.',prog:'V-Sit Progression'},
  {id:'reverse-plank',name:'Reverse Plank',cat:'Core',level:2,equipment:'Keine',muscles:'Hintere Kette, Schulter',steps:['Hände hinter dem Körper, Beine gestreckt.','Becken anheben.','Brust öffnen und Linie halten.'],cue:'Schultern schmerzfrei positionieren.',reg:'Knie beugen.',prog:'Reverse Plank Leg Lift'},

  {id:'crow',name:'Crow/Frog Stand',cat:'Skills',level:2,equipment:'Keine',muscles:'Balance, Handgelenke, Core',steps:['Hände fest aufsetzen.','Knie auf Oberarme bringen.','Gewicht nach vorn verlagern und Füße lösen.'],cue:'Vor dir auf den Boden schauen, nicht direkt zwischen Hände.',reg:'Ein Fuß am Boden.',prog:'Crow Hold länger'},
  {id:'wall-handstand',name:'Wall Handstand',cat:'Skills',level:3,equipment:'Wand',muscles:'Schulter, Core, Balance',steps:['Sicher zur Wand in Handstand kommen.','Ellbogen strecken, Boden wegdrücken.','Rippen einziehen und Gesäß anspannen.'],cue:'Abrollen/Ausstieg vorher üben.',reg:'Pike Hold.',prog:'Chest-to-Wall Handstand'},
  {id:'chest-wall',name:'Chest-to-Wall Handstand',cat:'Skills',level:4,equipment:'Wand',muscles:'Schulter, Core, Balance',steps:['Mit Füßen an der Wand hochlaufen.','Brust zur Wand, Hände nah heran.','Körper möglichst gestreckt halten.'],cue:'Nur so nah, wie ein sicherer Ausstieg möglich ist.',reg:'Wall Handstand.',prog:'Freestanding Handstand'},
  {id:'handstand',name:'Freestanding Handstand',cat:'Skills',level:5,equipment:'Keine',muscles:'Balance, Schulter, Core',steps:['Kontrolliert aufschwingen.','Schultern aktiv hochdrücken.','Mit Fingerdruck Balance fein steuern.'],cue:'Viele kurze, sichere Versuche statt Ermüdung.',reg:'Wall Handstand.',prog:'Handstand Walking'},
  {id:'skin-cat-tuck',name:'Tuck Skin-the-Cat',cat:'Skills',level:4,equipment:'Ringe/Stange',muscles:'Schulter, Lat, Core',steps:['Im Hang Knie anziehen.','Kontrolliert rückwärts durch die Arme rotieren.','Nur in schmerzfreier Schulterreichweite arbeiten.'],cue:'Langsam und mit guter Schulterkontrolle.',reg:'Kleinere Rotation / Ringe tief.',prog:'Skin-the-Cat'},
  {id:'muscle-transition',name:'Low-bar Muscle-up Transition',cat:'Skills',level:4,equipment:'Niedrige Stange',muscles:'Zug, Druck, Übergang',steps:['Stange auf Brusthöhe nutzen.','Mit Füßen unterstützen und Brust über die Stange bringen.','In den Dip-Stütz wechseln.'],cue:'Technik langsam üben, nicht reißen.',reg:'Höhere Stange + mehr Fußhilfe.',prog:'Jumping Muscle-up'},
  {id:'jump-muscleup',name:'Jumping Muscle-up',cat:'Skills',level:4,equipment:'Stange',muscles:'Zug, Druck, Übergang',steps:['Stange so wählen, dass Bodenkontakt möglich ist.','Mit leichtem Absprung hochziehen.','Brust über Stange und in Stütz drücken.'],cue:'Absprung schrittweise reduzieren.',reg:'Low-bar Transition.',prog:'Band Muscle-up'},
  {id:'muscleup',name:'Muscle-up',cat:'Skills',level:5,equipment:'Klimmzugstange',muscles:'Explosiver Zug, Brust, Trizeps, Core',steps:['Aus kontrolliertem Hang explosiv hochziehen.','Brust über die Stange bringen.','Übergang in Straight Bar Dip abschließen.'],cue:'Erst mit starken Pull-ups und Dips angehen.',reg:'Band/Jumping Muscle-up.',prog:'Strict Muscle-up'},
  {id:'tuck-front',name:'Tuck Front Lever Hold',cat:'Skills',level:4,equipment:'Klimmzugstange',muscles:'Lat, Core, hintere Schulter',steps:['Im Hang Knie zur Brust.','Schultern aktiv nach unten ziehen.','Rumpf möglichst horizontal halten.'],cue:'Ellbogen gestreckt lassen.',reg:'Advanced Active Hang.',prog:'Advanced Tuck Front Lever'},
  {id:'tuck-back',name:'Tuck Back Lever Hold',cat:'Skills',level:5,equipment:'Ringe/Stange',muscles:'Schulter, Brust, Core',steps:['Aus kontrollierter Inversion in Tuck-Position.','Schultern stabilisieren.','Nur schmerzfrei horizontal halten.'],cue:'Hohe Schulterbelastung – langsam aufbauen.',reg:'Skin-the-Cat Hold.',prog:'Advanced Tuck Back Lever'},
  {id:'planche-lean',name:'Planche Lean',cat:'Skills',level:4,equipment:'Keine/Parallettes',muscles:'Schulter, Brust, Core, Handgelenk',steps:['Im hohen Stütz starten.','Schultern vor die Hände verlagern.','Ellbogen strecken und Körperlinie halten.'],cue:'Protraktion aktiv halten.',reg:'Kleine Vorverlagerung.',prog:'Tuck Planche'},
  {id:'tuck-planche',name:'Tuck Planche',cat:'Skills',level:5,equipment:'Parallettes',muscles:'Schulter, Brust, Core',steps:['Hände fest aufsetzen.','Knie anziehen und Schultern vor Hände bringen.','Füße lösen und mit gestreckten Ellbogen halten.'],cue:'Nur mit belastbaren Handgelenken/Schultern.',reg:'Planche Lean / Frog Stand.',prog:'Advanced Tuck Planche'},

  {id:'wrist-rocks',name:'Wrist Rocks',cat:'Mobility',level:1,equipment:'Keine',muscles:'Handgelenke, Unterarme',steps:['Im Vierfüßler Hände flach aufsetzen.','Sanft vor/zurück verlagern.','Schmerzfreie Reichweite nutzen.'],cue:'Keine federnden Endpositionen.',reg:'Weniger Körpergewicht.',prog:'Größere Reichweite'},
  {id:'shoulder-cars',name:'Shoulder CARs',cat:'Mobility',level:1,equipment:'Keine',muscles:'Schulterbeweglichkeit',steps:['Aufrecht stehen, Rumpf ruhig.','Arm langsam in großem Kreis bewegen.','Nur schmerzfreie Bewegungsbahn.'],cue:'Langsam und kontrolliert.',reg:'Kleinere Kreise.',prog:'Größere kontrollierte Kreise'},
  {id:'cat-cow',name:'Cat-Cow',cat:'Mobility',level:1,equipment:'Keine',muscles:'Wirbelsäule',steps:['Vierfüßlerstand.','Wirbelsäule segmentweise runden.','Dann kontrolliert in Gegenrichtung bewegen.'],cue:'Mit Atmung koppeln.',reg:'Kleinere Bewegungsamplitude.',prog:'Segmentierter bewegen'},
  {id:'deep-squat-hold',name:'Deep Squat Hold',cat:'Mobility',level:1,equipment:'Keine',muscles:'Hüfte, Sprunggelenk',steps:['In eine bequeme tiefe Kniebeuge sinken.','Fersen möglichst am Boden.','Ruhig atmen und Knie sanft nach außen führen.'],cue:'Bei Bedarf an Pfosten festhalten.',reg:'Fersen erhöhen.',prog:'Längere Holds'},
  {id:'ankle-rock',name:'Ankle Dorsiflexion Rock',cat:'Mobility',level:1,equipment:'Wand optional',muscles:'Sprunggelenk',steps:['Fuß flach am Boden.','Knie nach vorn über die Zehen führen.','Ferse bleibt unten.'],cue:'Knie folgt der Fußrichtung.',reg:'Kleinere Reichweite.',prog:'Weiter vom Bezugspunkt'},
  {id:'hip-flexor',name:'Half-kneeling Hip Flexor Stretch',cat:'Mobility',level:1,equipment:'Keine',muscles:'Hüftbeuger',steps:['Halbkniend starten.','Gesäß des hinteren Beins anspannen.','Becken leicht nach vorn führen.'],cue:'Nicht ins Hohlkreuz ausweichen.',reg:'Kürzere Schrittposition.',prog:'Arm über Kopf ergänzen'},
  {id:'lat-stretch',name:'Bench Lat Stretch',cat:'Mobility',level:1,equipment:'Bank',muscles:'Lat, Schulter',steps:['Ellbogen oder Hände auf Bank.','Hüfte nach hinten führen.','Brust sanft Richtung Boden sinken lassen.'],cue:'Rippen kontrolliert halten.',reg:'Hände höher.',prog:'Längere entspannte Atmung'},
  {id:'thoracic-rotation',name:'Thoracic Rotation',cat:'Mobility',level:1,equipment:'Keine',muscles:'Brustwirbelsäule',steps:['Vierfüßler oder Seitlage.','Oberen Arm kontrolliert aufdrehen.','Becken möglichst stabil halten.'],cue:'Rotation aus Brustwirbelsäule, nicht aus LWS erzwingen.',reg:'Kleinere Rotation.',prog:'Endposition kurz halten'}
];

export const weeks = [
  {week:1,title:'Basis neu kalibrieren',focus:'Saubere Wiederholungen, 2–3 RIR, Technik vor Tempo.',days:[
    {day:'Mo',name:'Push + Handstand',items:[['pushup','4×8–12'],['pike-pushup','4×6–10'],['support-hold','4×20–30 s'],['wall-handstand','6×20–30 s'],['hollow','3×25–35 s']]},
    {day:'Di',name:'Pull + Core',items:[['body-row','4×8–12'],['pullup-negative','5×3–5'],['scap-pullup','3×8–10'],['knee-raise','4×8–12'],['dead-hang','2×40–60 s']]},
    {day:'Do',name:'Legs + L-Sit',items:[['bulgarian','4×8/Seite'],['cossack','3×8/Seite'],['single-glute','3×12/Seite'],['l-sit-tuck','6×10–20 s'],['deep-squat-hold','2×45 s']]},
    {day:'Sa',name:'Mixed Skill',items:[['decline-pushup','3×8–12'],['body-row','3×10–12'],['crow','6×15–25 s'],['planche-lean','5×10–20 s'],['arch-hold','3×25–35 s']]}
  ]},
  {week:2,title:'Volumen stabilisieren',focus:'Obere Rep-Grenzen anpeilen, ohne technische Kompromisse.',days:[
    {day:'Mo',name:'Push + Handstand',items:[['decline-pushup','4×7–10'],['pike-pushup','4×7–10'],['dip-negative','4×3–5'],['chest-wall','6×20–35 s'],['hollow','3×30–40 s']]},
    {day:'Di',name:'Pull + Core',items:[['body-row','4×10–14'],['band-pullup','5×4–7'],['scap-pullup','3×10'],['leg-raise','4×6–10'],['dead-hang','2×45–60 s']]},
    {day:'Do',name:'Legs + L-Sit',items:[['bulgarian','4×10/Seite'],['pistol-box','4×5/Seite'],['calf-raise','4×15/Seite'],['l-sit-tuck','6×15–25 s'],['reverse-plank','3×30 s']]},
    {day:'Sa',name:'Mixed Skill',items:[['pushup','3×submax'],['body-row','3×submax'],['crow','5×20–30 s'],['planche-lean','5×15–20 s'],['skin-cat-tuck','4×2–4']]}
  ]},
  {week:3,title:'Erste Skill-Spezialisierung',focus:'Pull-up und Dip werden Hauptkraftziele; Handstand bleibt frisch.',days:[
    {day:'Mo',name:'Push Strength',items:[['dip-negative','5×3–5'],['decline-pushup','4×8–12'],['elevated-pike','4×5–8'],['wall-handstand','7×25–35 s'],['planche-lean','4×15–25 s']]},
    {day:'Di',name:'Pull Strength',items:[['band-pullup','6×4–6'],['feet-row','4×6–10'],['chinup','4×1–4 sauber'],['knee-raise','4×10–12'],['tuck-front','5×8–15 s']]},
    {day:'Do',name:'Legs + Compression',items:[['pistol-box','5×5/Seite'],['bulgarian','3×10/Seite'],['nordic-neg','4×3–5'],['l-sit-tuck','7×15–25 s'],['hollow','3×35 s']]},
    {day:'Sa',name:'Skill Circuit',items:[['support-hold','4×30 s'],['chest-wall','6×30 s'],['crow','5×30 s'],['skin-cat-tuck','4×3'],['deep-squat-hold','2×60 s']]}
  ]},
  {week:4,title:'Basics freischalten',focus:'Erste freie Pull-ups/Dips testen; nur technisch saubere Singles zählen.',days:[
    {day:'Mo',name:'Push Strength',items:[['dip','6×1–4'],['decline-pushup','4×8–12'],['elevated-pike','4×6–8'],['chest-wall','6×30–40 s'],['planche-lean','5×20 s']]},
    {day:'Di',name:'Pull Strength',items:[['pullup','6×1–4'],['feet-row','4×8–12'],['chinup','3×2–5'],['leg-raise','4×8–10'],['tuck-front','5×10–15 s']]},
    {day:'Do',name:'Legs + L-Sit',items:[['pistol-box','5×6/Seite'],['cossack','3×10/Seite'],['nordic-neg','4×4'],['l-sit-tuck','6×20–30 s'],['side-plank','3×35 s/Seite']]},
    {day:'Sa',name:'Technique Day',items:[['wall-handstand','8×30 s'],['support-hold','4×35 s'],['skin-cat-tuck','5×3'],['crow','5×30–40 s'],['wrist-rocks','2×45 s']]}
  ]},
  {week:5,title:'Kraftaufbau',focus:'Mehr echte Pull-up/Dip-Wiederholungen, kontrollierte einbeinige Beinarbeit.',days:[
    {day:'Mo',name:'Push + HSPU Prep',items:[['dip','5×3–6'],['elevated-pike','5×5–8'],['diamond-pushup','3×8–12'],['chest-wall','7×30–45 s'],['planche-lean','5×20–25 s']]},
    {day:'Di',name:'Pull + Front Lever',items:[['pullup','5×3–6'],['chest-bar','5×2–4'],['feet-row','3×10'],['tuck-front','6×10–18 s'],['leg-raise','4×8–12']]},
    {day:'Do',name:'Legs + L-Sit',items:[['pistol-box','5×6–8/Seite'],['bulgarian','4×8/Seite'],['nordic-neg','4×4–6'],['l-sit-tuck','7×20–30 s'],['calf-raise','3×20/Seite']]},
    {day:'Sa',name:'Muscle-up Prep',items:[['chest-bar','6×2–4'],['straight-bar-dip','5×3–6'],['muscle-transition','6×3 langsam'],['hollow','4×30–40 s'],['dead-hang','2×60 s']]}
  ]},
  {week:6,title:'Skill-Kapazität',focus:'Holds verlängern und Übergänge kontrollieren, keine erzwungenen Reps.',days:[
    {day:'Mo',name:'Push + Handstand',items:[['dip','6×3–6'],['elevated-pike','5×6–9'],['decline-pushup','3×10–15'],['chest-wall','6×40–50 s'],['planche-lean','5×25 s']]},
    {day:'Di',name:'Pull + Lever',items:[['pullup','6×3–6'],['chest-bar','5×3–5'],['tuck-front','6×12–20 s'],['skin-cat-tuck','4×3–5'],['leg-raise','4×10']]},
    {day:'Do',name:'Pistol + L-Sit',items:[['pistol','6×1–4/Seite'],['pistol-box','3×8/Seite'],['nordic-neg','4×5'],['l-sit','8×5–12 s'],['hollow','3×40 s']]},
    {day:'Sa',name:'Muscle-up Prep',items:[['chest-bar','6×3'],['straight-bar-dip','5×4–7'],['muscle-transition','6×3–4'],['jump-muscleup','5×2–4'],['wrist-rocks','2×45 s']]}
  ]},
  {week:7,title:'Deload + Technik',focus:'Volumen etwa 30 % reduzieren, Bewegungsqualität und Gelenke priorisieren.',days:[
    {day:'Mo',name:'Push Technique',items:[['dip','4×3–5'],['pike-pushup','3×8'],['wall-handstand','5×30 s'],['planche-lean','4×15–20 s'],['scap-pushup','2×10']]},
    {day:'Di',name:'Pull Technique',items:[['pullup','4×3–5'],['body-row','3×10'],['tuck-front','4×10–15 s'],['active-hang','3×8'],['dead-hang','2×40 s']]},
    {day:'Do',name:'Legs + Core Easy',items:[['bulgarian','3×8/Seite'],['pistol-box','3×5/Seite'],['l-sit-tuck','5×15–20 s'],['side-plank','2×30 s/Seite'],['deep-squat-hold','2×45 s']]},
    {day:'Sa',name:'Skill Flow',items:[['crow','4×25 s'],['chest-wall','5×30 s'],['skin-cat-tuck','3×3'],['muscle-transition','4×3'],['shoulder-cars','2×5/Seite']]}
  ]},
  {week:8,title:'Intensität II',focus:'Nach Deload wieder schwerer; Qualität bleibt das Limit.',days:[
    {day:'Mo',name:'Push Power',items:[['dip','6×4–7'],['elevated-pike','5×6–10'],['diamond-pushup','3×10'],['handstand','8×10–30 s Versuche'],['planche-lean','5×25–30 s']]},
    {day:'Di',name:'Pull Power',items:[['pullup','6×4–7'],['chest-bar','6×3–5'],['feet-row','3×10–12'],['tuck-front','6×15–22 s'],['leg-raise','4×10–12']]},
    {day:'Do',name:'Legs + L-Sit',items:[['pistol','6×2–5/Seite'],['nordic-neg','5×4–6'],['cossack','3×8/Seite'],['l-sit','8×8–15 s'],['reverse-plank','3×40 s']]},
    {day:'Sa',name:'Muscle-up Skill',items:[['chest-bar','6×3–5'],['straight-bar-dip','5×5–8'],['jump-muscleup','6×2–4'],['muscle-transition','5×3'],['hollow','3×40 s']]}
  ]},
  {week:9,title:'Skill-Verknüpfung',focus:'Kraft in komplexere Calisthenics-Muster übertragen.',days:[
    {day:'Mo',name:'Handstand + Push',items:[['handstand','10×10–30 s Versuche'],['elevated-pike','5×7–10'],['dip','5×5–8'],['planche-lean','6×20–30 s'],['hollow','3×45 s']]},
    {day:'Di',name:'Pull + Lever',items:[['pullup','5×5–8'],['chest-bar','6×3–5'],['tuck-front','7×15–25 s'],['skin-cat-tuck','4×4'],['leg-raise','4×12']]},
    {day:'Do',name:'Pistol + L-Sit',items:[['pistol','6×3–6/Seite'],['bulgarian','3×10/Seite'],['nordic-neg','4×5–7'],['l-sit','8×10–18 s'],['deep-squat-hold','2×60 s']]},
    {day:'Sa',name:'Muscle-up Attempts',items:[['chest-bar','5×3'],['jump-muscleup','4×2'],['muscleup','6×1–3 technisch'],['straight-bar-dip','4×5'],['dead-hang','2×60 s']]}
  ]},
  {week:10,title:'Kontrolle unter Last',focus:'Submaximal trainieren; technische Standards werden strenger.',days:[
    {day:'Mo',name:'Push Mastery',items:[['dip','5×6–9'],['elevated-pike','5×8–10'],['handstand','10×15–35 s Versuche'],['planche-lean','6×25–35 s'],['scap-pushup','3×12']]},
    {day:'Di',name:'Pull Mastery',items:[['pullup','5×6–9'],['chest-bar','5×4–6'],['tuck-front','7×18–25 s'],['chinup','3×6–8'],['leg-raise','4×12–15']]},
    {day:'Do',name:'Lower Mastery',items:[['pistol','5×4–7/Seite'],['nordic-neg','5×5'],['cossack','3×10/Seite'],['l-sit','8×12–20 s'],['calf-raise','3×20/Seite']]},
    {day:'Sa',name:'Complex Skills',items:[['muscleup','7×1–3'],['straight-bar-dip','4×6–8'],['skin-cat-tuck','4×4'],['crow','4×40 s'],['hollow','3×45 s']]}
  ]},
  {week:11,title:'Peak Week',focus:'Niedrigere Gesamtmenge, hohe technische Qualität und längere Skill-Holds.',days:[
    {day:'Mo',name:'Push Peak',items:[['dip','4×5–8'],['elevated-pike','4×6–9'],['handstand','8×20–40 s Versuche'],['planche-lean','5×30 s'],['support-hold','2×45 s']]},
    {day:'Di',name:'Pull Peak',items:[['pullup','4×5–8'],['chest-bar','5×3–5'],['tuck-front','6×20–30 s'],['leg-raise','3×12'],['dead-hang','2×60 s']]},
    {day:'Do',name:'Leg + L-Sit Peak',items:[['pistol','4×4–6/Seite'],['nordic-neg','4×4–6'],['l-sit','7×15–25 s'],['hollow','3×45–60 s'],['deep-squat-hold','2×60 s']]},
    {day:'Sa',name:'Muscle-up Peak',items:[['muscleup','6×1–3'],['chest-bar','4×3'],['straight-bar-dip','4×5'],['muscle-transition','3×3'],['wrist-rocks','2×45 s']]}
  ]},
  {week:12,title:'Benchmark & Graduation',focus:'Keine Grind-Reps. Dokumentiere nur technisch saubere Leistungen und wähle danach deine nächste Progression.',days:[
    {day:'Mo',name:'Basics Benchmark',items:[['pushup','1×sauberes Maximum'],['pullup','1×sauberes Maximum'],['dip','1×sauberes Maximum'],['pistol','3×max sauber/Seite'],['hollow','2×max sauber, max 60 s']]},
    {day:'Di',name:'Static Skills',items:[['handstand','8×Bestversuch'],['l-sit','6×Bestversuch'],['tuck-front','6×Bestversuch'],['planche-lean','5×Bestversuch'],['dead-hang','1×komfortables Maximum']]},
    {day:'Do',name:'Muscle-up + Control',items:[['muscleup','6×saubere Singles/Versuche'],['chest-bar','4×3–5'],['straight-bar-dip','4×5–8'],['skin-cat-tuck','4×3–5'],['leg-raise','3×12']]},
    {day:'Sa',name:'Graduation Flow',items:[['pullup','3×submax'],['dip','3×submax'],['pistol','3×5/Seite'],['handstand','6×20–40 s'],['l-sit','6×10–20 s'],['deep-squat-hold','2×60 s']]}
  ]}
];

export const warmup = ['2–3 min lockere Bewegung', 'Wrist Rocks × 30–45 s', 'Shoulder CARs × 5/Seite', 'Cat-Cow × 6', 'Air Squats × 10', 'Scapular Push-ups × 8'];
export const rules = [
  'Vier Einheiten pro Woche: Mo/Di und Do/Sa ist der Standardrhythmus. Verschiebe Tage bei Bedarf, aber vermeide vier harte Tage am Stück.',
  'Meist 1–3 saubere Wiederholungen in Reserve lassen. Muskelversagen ist für den Skill-Aufbau nicht nötig.',
  'Steigere zuerst Technik und Wiederholungen, dann die Übungsvariante. Bei Holds zuerst stabile Zeit erhöhen.',
  'Skills stehen früh im Training, solange du frisch bist. Balance- und Transition-Drills nicht unter starker Ermüdung erzwingen.',
  'Stechender oder zunehmender Gelenkschmerz ist ein Stoppsignal: regressieren, Belastung reduzieren oder fachlich abklären.'
];

export const milestones = [
  {id:'m-pullup',label:'8 saubere Pull-ups',exercise:'pullup'},
  {id:'m-dip',label:'10 saubere Dips',exercise:'dip'},
  {id:'m-handstand',label:'30 s freier Handstand',exercise:'handstand'},
  {id:'m-lsit',label:'20 s L-Sit',exercise:'l-sit'},
  {id:'m-pistol',label:'5 saubere Pistols je Seite',exercise:'pistol'},
  {id:'m-muscleup',label:'1 sauberer Muscle-up',exercise:'muscleup'},
  {id:'m-front',label:'20 s Tuck Front Lever',exercise:'tuck-front'},
  {id:'m-planche',label:'30 s kontrollierter Planche Lean',exercise:'planche-lean'}
];
