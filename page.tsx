import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-xl font-bold">Mariem Ahmouda</h1>
              <p className="text-sm text-gray-300">PSYCHOLOGUE CLINICIEN</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="nav-link">À propos</a>
              <a href="#expertises" className="nav-link">Expertises</a>
              <a href="#ado" className="nav-link">Adolescents</a>
              <a href="#enfants" className="nav-link">Enfants</a>
              <a href="#tarifs" className="nav-link">Tarifs</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://ext.same-assets.com/557472037/620108064.jpeg"
          alt="Parapluie coloré symbolisant la protection et l'accompagnement psychologique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider text-shadow">
            "COMPRENDRE PLUTÔT QUE JUGER"
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-600 section-padding text-center text-white">
        <h3 className="text-2xl md:text-3xl mb-8 font-light">
          CONSULTATIONS AU CABINET OU PAR INTERNET
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="tel:0669347469" className="btn-primary">
            06 69 34 74 69
          </a>
          <a href="#contact" className="btn-secondary">
            Formulaire de contact
          </a>
          <a href="#contact" className="btn-primary">
            Prendre rendez-vous en ligne
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-700 mb-4">MARIEM AHMOUDA</h2>
          <p className="text-gray-600 mb-8">Psychologue clinicien - Psychothérapeute Lyon</p>

          <div className="max-w-4xl mx-auto text-gray-700 space-y-6 text-lg">
            <p>
              Nous disposons tous des ressources nécessaires pour trouver notre voie, surmonter nos difficultés et faire face à la vie quotidienne.
              Mais c'est parfois si difficile...
            </p>
            <p>
              Consulter un Psychologue Clinicien, c'est rencontrer un thérapeute de confiance prêt à accueillir et apaiser les souffrances en
              proposant une écoute, un soin et une aide psychologique.
            </p>
            <p>
              Quels que soient vos questionnements et difficultés, je vous accueille à mon cabinet de psychologie au 26 Cours Docteur Long
              dans le 3ème arrondissement de Lyon.
            </p>

            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Langues parlées</h3>
              <p className="text-gray-700">Français • Anglais • Arabe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-600 section-padding text-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Mariem Ahmouda Psychologue clinicien.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="icon-circle">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Consultations sur rendez-vous :</h4>
              <p>Du lundi au vendredi, de 9h à 21h.</p>
              <p>Le samedi de 9h à 18h.</p>
            </div>
            <div>
              <div className="icon-circle">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Mariem Ahmouda</h4>
              <p>26 Cours Docteur Long</p>
              <p>69003 Lyon</p>
              <p className="text-sm mt-2 text-green-300">✓ Entrée accessible</p>
            </div>
            <div>
              <div className="icon-circle">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">tél. : <span className="text-orange-400">06 69 34 74 69</span></h4>
              <p><a href="mailto:drmariemahmouda@gmail.com" className="text-orange-400 hover:underline">drmariemahmouda@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section id="expertises" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-orange-400 mb-4">EXPERTISES ET ACTES</h2>
            <p className="text-gray-300">Accompagnement psychologique spécialisé</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-orange-400 font-bold mb-3">Accompagnement spécialisé</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Dépression post-partum</li>
                <li>• Protection Maternelle et Infantile (PMI)</li>
                <li>• Psychologie de l'enfant</li>
                <li>• Pédopsychologie</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-orange-400 font-bold mb-3">Approches thérapeutiques</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Psychanalyse</li>
                <li>• Thérapie analytique</li>
                <li>• Thérapie cognitive et comportementale (TCC)</li>
                <li>• Thérapie psycho-émotionnelle</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-orange-400 font-bold mb-3">Évaluations</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Tests de personnalité</li>
                <li>• Bilans psychologiques</li>
                <li>• Évaluations développementales</li>
                <li>• Assessments cognitifs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Adolescents Section */}
      <section id="ado" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-700 mb-4">ADOLESCENTS</h2>
            <p className="text-gray-600">Écoute et étayage psychologique, Médiation thérapeutique.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="https://ext.same-assets.com/557472037/3405433747.jpeg"
                alt="Soutien adolescent"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-orange-500 font-bold text-xl mb-2">Soutien</h3>
              <p className="text-gray-700">
                Formation approfondie en Psychopathologie et <span className="text-orange-500">Psychologie de l'adolescence</span>.
                Soutien et accompagnement au développement. Crise identitaire, souffrances, angoisses, mal-être, malaise social...
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="https://ext.same-assets.com/557472037/3211987627.jpeg"
                alt="Troubles adolescent"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-orange-500 font-bold text-xl mb-2">Troubles</h3>
              <p className="text-gray-700">
                <span className="text-orange-500">Troubles du comportement et caractériels</span> épisode dépressif, repli sur soi, anxiété,
                agressivité, addictions, phobies, troubles du sommeil et de l'alimentation...
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="https://ext.same-assets.com/557472037/2179303637.jpeg"
                alt="Traumatismes adolescent"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-orange-500 font-bold text-xl mb-2">Traumatismes</h3>
              <p className="text-gray-700">
                Séparation, traumatismes, <span className="text-orange-500">Difficultés relationnelles</span> et scolaires, troubles corporels,
                passages à l'acte...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enfants Section */}
      <section id="enfants" className="py-16 bg-gray-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">ENFANTS</h2>
            <p className="text-gray-300">Soutien au développement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <Image
                src="https://ext.same-assets.com/557472037/2345514017.jpeg"
                alt="Relation enfant"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-white font-bold text-xl mb-2">Relation</h3>
              <p className="text-gray-300">
                Étayage et <span className="bg-orange-500 px-2 py-1 rounded text-white">soutien au développement</span> et à la scolarité.
                Relation mère-enfant, parents-enfant. Troubles comportementaux et caractériels, agitation, anxiété, opposition, agressivité,
                inhibition, repli sur soi, tristesse, émotivité...
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <Image
                src="https://ext.same-assets.com/557472037/2633970519.jpeg"
                alt="Échec enfant"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-white font-bold text-xl mb-2">Échec</h3>
              <p className="text-gray-300">
                Troubles corporels et fonctionnels, troubles du sommeil, de l'appétit, maladies, handicaps, phobies,
                <span className="bg-orange-500 px-2 py-1 rounded text-white">angoisses</span> (d'abandon...), peurs. Événements difficiles,
                séparations. Troubles de l'apprentissage et de l'attention, échec scolaire, phobie scolaire, troubles Dys...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-700 mb-4">TARIFS</h2>
            <p className="text-gray-600">Honoraires indicatifs pouvant varier selon les actes réalisés</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <span className="font-medium text-gray-800">Adulte - Consultation de suivi de psychologie</span>
                <span className="text-orange-600 font-bold">65 €</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <span className="font-medium text-gray-800">Couple - Consultation de psychologie</span>
                <span className="text-orange-600 font-bold">80 €</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <span className="font-medium text-gray-800">Adolescent - Consultation de psychologie</span>
                <span className="text-orange-600 font-bold">65 €</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <span className="font-medium text-gray-800">Enfant - Consultation de psychologie</span>
                <span className="text-orange-600 font-bold">55 €</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                <span className="font-medium text-gray-800">Test de personnalité</span>
                <span className="text-orange-600 font-bold">300 €</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm text-gray-700">
                Ces honoraires vous sont communiqués à titre indicatif. Ils peuvent varier selon le type de soins finalement réalisés en cabinet,
                le nombre de consultations et les actes additionnels nécessaires. En cas de dépassement des tarifs, le soignant doit en avertir
                préalablement le patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <blockquote className="text-2xl md:text-3xl text-orange-400 italic mb-4">
            "La vraie liberté, c'est de pouvoir toute chose sur soi."
          </blockquote>
          <cite className="text-gray-400">MONTAIGNE, Les Essais, Livre III.</cite>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-700 mb-4">PRENDRE RENDEZ-VOUS</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-6">Formulaire</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nom</label>
                  <input type="text" className="form-input" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="form-input" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Tél</label>
                  <input type="tel" className="form-input" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="form-input"></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Envoyer
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-6">Adresse & Infos</h3>
              <div className="space-y-4 text-gray-700">
                <p>Mariem Ahmouda Psychologue clinicien - Psychothérapeute Lyon.</p>
                <p>Membre du Syndicat National des Psychologues</p>

                <div className="space-y-3">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    26 Cours Docteur Long - 69003 Lyon
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    06 69 34 74 69
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:drmariemahmouda@gmail.com" className="text-orange-500 hover:underline">
                      drmariemahmouda@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Sur rendez-vous, du Lundi au Vendredi, de 9h à 21h. Le Samedi de 9h à 18h.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-gray-800 mb-2">Moyens de transport</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>🚊 Tramway - Reconnaissance - Balzac (ligne T3)</li>
                    <li>🚊 Tramway - Grange Blanche (lignes T5 et T2)</li>
                    <li>🚌 Bus - Bonnand (ligne 25)</li>
                  </ul>
                  <p className="text-green-600 font-medium mt-2">✓ Entrée accessible</p>
                </div>

                <a href="#" className="inline-block btn-primary mt-4">
                  Prendre rendez-vous en ligne
                </a>

                <div className="text-sm text-gray-500 space-y-1 mt-6">
                  <p>n° adeli : 699317061</p>
                  <p>n° siret : 528 790 660 00013</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© Copyright 2025 Mariem Ahmouda. Tous droits réservés</p>
        </div>
      </footer>
    </div>
  )
}
