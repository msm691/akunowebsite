import React, { useState, useEffect } from 'react';
import { marked } from "marked";
import { 
  Shield, 
  Info, 
  FileText, 
  Hammer, 
  Gem, 
  Lock, 
  Wrench, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink, 
  Server,
  CheckCircle,
  MessageCircle,
  ScrollText,
  Copy
} from 'lucide-react';

// --- DATA ---
const commandsData = [
  {
    category: "Administration",
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    count: 10,
    cmds: ["/clear-invites", "/perm", "/perminfo","/rolemenu", "/setadmin", "/setgoodbye", "/setlogs", "/setmod", "/setup", "/setwelcome", "/ticket"]
  },
  {
    category: "Informations",
    icon: <Info className="w-6 h-6 text-cyan-400" />,
    count: 3,
    cmds: ["/ping", "/serverinfo", "/userinfo"]
  },
  {
    category: "Logs",
    icon: <FileText className="w-6 h-6 text-yellow-400" />,
    count: 1,
    cmds: ["/logs"]
  },
  {
    category: "Modération",
    icon: <Hammer className="w-6 h-6 text-red-400" />,
    count: 13,
    cmds: ["/addrole", "/ban", "/clear", "/clearwarn", "/delrole", "/derank", "/kick", "/mute", "/timeout", "/unban", "/unmute", "/warn", "/warnings"]
  },
  {
    category: "Premium",
    icon: <Gem className="w-6 h-6 text-pink-400" />,
    count: 14,
    cmds: ["/alladmin", "/allbot", "/backup", "/boosters", "/embed", "/emoji", "/giveaway", "/ia", "/massrole", "/moveall", "/renew", "/say", "/serverstats", "/snipe", "/tempvoice"]
  },
  {
    category: "Sécurité",
    icon: <Lock className="w-6 h-6 text-green-400" />,
    count: 13,
    cmds: ["/antijoin", "/antilink", "/antimention", "/antiraid", "/antispam", "/antiswear", "/botblock", "/inviteblock", "/lock", "/quarantine", "/raidmode", "/slowmode", "/unlock"]
  },
  {
    category: "Utilitaires",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    count: 9,
    cmds: ["/afk", "/avatar", "/help", "/invites", "/link", "/poll", "/roleinfo", "/stats", "/support"]
  }
];

// --- COMPONENTS ---

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'add', label: 'Ajouter le bot' },
    { id: 'contact', label: 'Contact' },
    { id: 'patchnotes', label: 'Patch Notes' },
    { id: 'legal', label: 'CGU & TOS' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <img
              src="akuno.png"
              alt="Logo Akuno"
              className="w-8 h-8 rounded-lg mr-2 shadow-lg shadow-blue-500/20"
            />
            <span className="text-white font-bold text-xl tracking-wider">AKUNO</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-slate-800 text-blue-400 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === item.id
                    ? 'bg-slate-900 text-blue-400'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setActiveTab }) => (
  <div className="relative overflow-hidden bg-slate-900 pt-32 pb-16 lg:pt-48 lg:pb-32">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
        <span className="block">Gérez votre serveur avec</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Puissance & Simplicité
        </span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Akuno est le bot tout-en-un pour sécuriser, modérer et animer votre communauté Discord.
        Plus de 60 commandes à votre disposition.
      </p>
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
        <button
          onClick={() => setActiveTab('add')}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
        >
          Ajouter Akuno
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
        <button
          onClick={() => document.getElementById('commands').scrollIntoView({ behavior: 'smooth' })}
          className="mt-3 w-full flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 bg-transparent hover:bg-slate-800 md:py-4 md:text-lg md:px-10 md:mt-0 transition-all"
        >
          Voir les commandes
        </button>
      </div>
    </div>
  </div>
);

const CommandCard = ({ category, icon, count, cmds }) => (
  <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{category}</h3>
        </div>
        <span className="px-2 py-1 text-xs font-semibold bg-slate-700 text-slate-300 rounded-full border border-slate-600">
          {count}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {cmds.map((cmd, idx) => (
          <span 
            key={idx} 
            className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-700/50 text-slate-300 hover:text-blue-300 hover:bg-slate-700 cursor-default transition-colors border border-transparent hover:border-slate-600"
          >
            {cmd}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const CommandsSection = () => (
  <div id="commands" className="py-16 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Liste des Commandes
        </p>
        <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
          Explorez l'arsenal complet d'Akuno pour gérer votre serveur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commandsData.map((data, idx) => (
          <CommandCard key={idx} {...data} />
        ))}
      </div>
    </div>
  </div>
);

const AddBotPage = () => {
  const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1443006002114072777&scope=bot+applications.commands&permissions=8";

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 mb-6 animate-bounce">
            <Server className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ajouter Akuno à votre serveur
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Configuration simple et rapide en 3 étapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              step: "01",
              title: "Cliquez sur le lien",
              desc: "Utilisez le bouton d'invitation ci-dessous pour ouvrir l'interface Discord.",
              icon: <ExternalLink className="w-6 h-6" />
            },
            {
              step: "02",
              title: "Sélectionnez le serveur",
              desc: "Choisissez le serveur où vous souhaitez installer Akuno (Permission Admin requise).",
              icon: <CheckCircle className="w-6 h-6" />
            },
            {
              step: "03",
              title: "Autorisez l'accès",
              desc: "Validez les permissions nécessaires pour qu'Akuno fonctionne correctement.",
              icon: <Lock className="w-6 h-6" />
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-slate-700/20 z-0">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transform transition hover:scale-105"
          >
            Inviter Akuno maintenant
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const supportLink = "https://discord.gg/akuno";
  const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1443006002114072777&scope=bot+applications.commands&permissions=8";
  
  const handleCopyInvite = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-slate-900 flex items-center justify-center">
      <div className="max-w-lg w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Besoin d'aide ?</h2>
          <p className="text-slate-400 mb-8">
            Notre équipe de support est disponible 24/7 sur notre serveur Discord communautaire.
            Rejoignez-nous pour poser vos questions ou signaler un bug.
          </p>
          
          <div className="space-y-4">
            <a 
              href={supportLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
              </svg>
              Rejoindre le Support
            </a>
          </div>
        </div>
        <div className="bg-slate-900/50 p-4 border-t border-slate-700 flex justify-between items-center px-8">
          <span className="text-sm text-slate-500">ID Support: 1443302950649987254</span>
          <button 
            onClick={handleCopyInvite}
            className="text-sm text-blue-400 hover:text-blue-300 flex items-center transition-colors"
          >
            <Copy className="w-4 h-4 mr-1" /> Copier l'invitation
          </button>
        </div>
      </div>
    </div>
  );
};

const LegalPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8">
              <ScrollText className="w-10 h-10 text-blue-400 mr-4" />
              <h1 className="text-3xl font-bold text-white">Mentions Légales</h1>
            </div>
            
            <div className="prose prose-invert prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">⚖️ Conditions Générales d'Utilisation (CGU) d'Akuno Bot</h2>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptation des Conditions</h3>
              <p className="text-slate-400 mb-4">
                En ajoutant et en utilisant Akuno Bot sur un serveur Discord, vous (l'utilisateur, l'administrateur et/ou le propriétaire du serveur) acceptez les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le Bot.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Description du Service</h3>
              <p className="text-slate-400 mb-4">
                Akuno Bot est un outil multifonction conçu pour améliorer la gestion, la sécurité et l'engagement des communautés Discord. Ses fonctionnalités comprennent la modération (ban, kick, mute), la protection anti-raid, l'analyse d'activité, les systèmes de support (tickets) et les outils Premium (IA, Backups, Stats).
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Utilisation et Responsabilités de l'Utilisateur</h3>
              <p className="text-slate-400 mb-4">
                L'utilisateur et les administrateurs du serveur sont seuls responsables de l'utilisation d'Akuno Bot.
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2 mb-4">
                <li><strong>Abus de Commandes :</strong> L'utilisation des commandes à des fins malveillantes (spam, harcèlement, contournement des règles de Discord) est strictement interdite.</li>
                <li><strong>Permissions :</strong> Vous devez vous assurer que le Bot dispose uniquement des permissions nécessaires pour son bon fonctionnement. Le créateur du Bot décline toute responsabilité en cas de configuration de permissions excessives ou dangereuses.</li>
                <li><strong>Lois Locales :</strong> L'utilisation du Bot doit respecter les lois locales et internationales en vigueur.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Collecte et Traitement des Données (Politique de Confidentialité)</h3>
              <p className="text-slate-400 mb-4">
                Conformément aux exigences de Discord et du RGPD, Akuno Bot collecte uniquement les données strictement nécessaires au bon fonctionnement et à la sécurité du service.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                  <thead className="uppercase tracking-wider border-b-2 border-slate-700 bg-slate-900/50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-slate-200">Catégorie de Données</th>
                      <th scope="col" className="px-6 py-4 text-slate-200">Données Collectées</th>
                      <th scope="col" className="px-6 py-4 text-slate-200">Finalité du Traitement</th>
                      <th scope="col" className="px-6 py-4 text-slate-200">Conservation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr className="hover:bg-slate-700/30">
                      <td className="px-6 py-4 font-medium text-white">Identifiants</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">ID du Serveur (Guild ID), ID de l'Utilisateur (User ID), ID du Salon (Channel ID), ID du Rôle (Role ID).</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Stockage des configurations, avertissements, notes et compteurs.</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Tant que le Bot est présent sur le serveur.</td>
                    </tr>
                    <tr className="hover:bg-slate-700/30">
                      <td className="px-6 py-4 font-medium text-white">Journaux d'Action</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Historique des sanctions (Ban, Mute, Kick) et commandes exécutées.</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Sécurité du Bot, logs de modération, Anti-Crash.</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">7 à 30 jours (selon le type) ou suppression manuelle.</td>
                    </tr>
                    <tr className="hover:bg-slate-700/30">
                      <td className="px-6 py-4 font-medium text-white">Contenu</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Contenu des messages (Anti-Spam, Anti-Link, IA).</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Analyse temps réel. Aucun stockage permanent sauf sanction explicite.</td>
                      <td className="px-6 py-4 text-slate-400 whitespace-normal">Non stocké au-delà de l'analyse immédiate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-400 mb-2"><strong>Sécurité des Données :</strong> Toutes les données de configuration et de modération sont stockées sur un fichier de base de données (SQLite) hébergé de manière sécurisée par le créateur du Bot et ne sont jamais partagées ou vendues à des tiers.</p>
              <p className="text-slate-400 mb-4"><strong>Suppression des Données :</strong> Pour toute demande de suppression des données persistantes vous concernant, veuillez contacter le propriétaire du Bot via le serveur support.</p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Limitation de Responsabilité</h3>
              <p className="text-slate-400 mb-4">
                Le créateur d'Akuno Bot (le développeur) ne peut être tenu responsable de :
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2 mb-4">
                <li>Toute interruption de service, perte de données ou défaillance causée par Discord, l'hébergeur ou une panne externe.</li>
                <li>L'utilisation abusive du Bot par les utilisateurs ou le staff d'un serveur.</li>
                <li>Tout bannissement ou sanction automatique résultant de l'activation des systèmes Anti-Raid et Anti-Spam du Bot.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Modifications des CGU</h3>
              <p className="text-slate-400 mb-4">
                Le créateur du Bot se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification majeure via le serveur support ou un message sur les serveurs où le Bot est présent.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">7. Contact</h3>
              <p className="text-slate-400 mb-4">
                Pour toute question concernant ces Conditions d'Utilisation ou pour une demande de support, veuillez contacter :
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2 mb-4">
                <li><strong>Via Discord :</strong> Sur le serveur Support Officiel (lien disponible via /link ou /support).</li>
                <li><strong>Propriétaire du Bot :</strong> ID 1088167648262627338 (Créateur & Dev).</li>
              </ul>

              <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500 mt-8">
                <p className="text-sm text-slate-400 italic">
                  Date de la dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PatchNotesPage = () => {
const patchnotes = [
{
date: "28/11/2025 - 23h19",
version: "v1.4.2",
content: `
### 🔧 Patch Note - Akuno


**Nouvelles Commandes :**
✅ **/rolemenu** : Création de menus de rôles interactifs.
✅ **/tempvoice** : Premium, système Join to Create.


**Permissions :**
• /rolemenu : Administrateur
• /tempvoice : Propriétaire (Premium)


*Mise à jour déployée.*
`
}
];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-400"/>
          Patch Notes
        </h1>

        {patchnotes.map((pn, idx) => (
          <div key={idx} className="mb-10 pb-6 border-b border-slate-700 last:border-none">
            <p className="text-sm text-slate-400 mb-2">
              📅 <strong>{pn.date}</strong> — Version <strong>{pn.version}</strong>
            </p>

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: marked.parse(pn.content) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ setActiveTab }) => (
  <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="akuno.png"
              alt="Logo Akuno"
              className="w-8 h-8 rounded-lg mr-2"
            />
            <span className="text-white font-bold text-xl">AKUNO</span>
          </div>
          <p className="text-slate-400 text-sm max-w-xs">
            Le compagnon idéal pour gérer, modérer et animer vos communautés Discord avec simplicité et efficacité.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liens</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-blue-400 transition">Accueil</button></li>
            <li><button onClick={() => setActiveTab('add')} className="hover:text-blue-400 transition">Ajouter le Bot</button></li>
            <li><button onClick={() => setActiveTab('contact')} className="hover:text-blue-400 transition">Support</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Légal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => setActiveTab('legal')} className="hover:text-blue-400 transition">CGU & TOS</button></li>
            <li><button onClick={() => setActiveTab('legal')} className="hover:text-blue-400 transition">Confidentialité</button></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Akuno Bot. Tous droits réservés.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
           {/* Social icons placeholders */}
           <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-blue-600 transition cursor-pointer"></div>
           <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-blue-600 transition cursor-pointer"></div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {activeTab === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Hero setActiveTab={setActiveTab} />
            <CommandsSection />
          </div>
        )}
        
        {activeTab === 'add' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AddBotPage />
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <ContactPage />
          </div>
        )}

        {activeTab === 'patchnotes' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PatchNotesPage />
          </div>
        )}
        
        {activeTab === 'legal' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <LegalPage />
          </div>
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;