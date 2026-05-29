import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Bot, Cpu, Network, Database, Layers, ShieldCheck } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';

const bentoCards = [
  {
    title: 'وكلاء الذكاء الاصطناعي المستقلة',
    description: 'أنظمة ذاتية التوجيه قادرة على اتخاذ قرارات معقدة وتنفيذ إجراءات متسلسلة دون تدخل بشري، مما يرفع كفاءة العمليات المؤسسية إلى مستويات غير مسبوقة.',
    icon: Bot,
    colSpan: 'md:col-span-2'
  },
  {
    title: 'أنظمة الذاكرة المتجهية',
    description: 'بنية تحتية متطورة للبيانات تتيح استرجاع المعلومات الدلالية بلمح البصر، لتعزيز ذاكرة المؤسسة وسرعة استجابتها.',
    icon: Database,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'التنسيق المعرفي',
    description: 'توجيه آلاف العمليات الدقيقة باستخدام نماذج لغوية ضخمة تعمل كعقل مركزي يدير كافة العمليات الحيوية بانسجام تام.',
    icon: Network,
    colSpan: 'md:col-span-3'
  }
];

const architectureSteps = [
  {
    title: 'طبقة التفكير والاستدلال',
    desc: 'محرك التحليل الاستراتيجي',
    icon: Cpu
  },
  {
    title: 'أنظمة التنسيق والأتمتة',
    desc: 'إدارة تدفق العمليات',
    icon: Layers
  },
  {
    title: 'ذاكرة المتجهات المؤسسية',
    desc: 'مخزون المعرفة السيادي',
    icon: ShieldCheck
  }
];

const SovereignLogo = ({ className = "", size = "large" }: { className?: string, size?: "small" | "large" }) => {
  const isSmall = size === "small";
  const dropShadowClass = isSmall ? "drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]" : "drop-shadow-[0_0_25px_rgba(0,163,255,0.4)]";
  const glowBlurClass = isSmall ? "blur-[12px]" : "blur-[40px]";
  const darkBlueId = `dark-blue-metal-${size}`;
  const coreBlueId = `core-blue-${size}`;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 200" className={`w-full h-full ${dropShadowClass}`}>
        <defs>
          <linearGradient id={darkBlueId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00A3FF" />
            <stop offset="35%" stopColor="#0066FF" />
            <stop offset="70%" stopColor="#001944" />
            <stop offset="100%" stopColor="#00091A" />
          </linearGradient>
          <linearGradient id={coreBlueId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#4DB8FF" />
          </linearGradient>
        </defs>
        
        <g transform="translate(100, 100)">
          {/* Architectural Frame */}
          <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40" fill="none" stroke="rgba(0,163,255,0.4)" strokeWidth="1" />
          <polygon points="0,-92 80,-46 80,46 0,92 -80,46 -80,-46" fill="none" stroke="rgba(0,163,255,0.2)" strokeWidth="0.5" />
          
          {/* The Intersecting Monolith */}
          <path d="M 0,-95 L 22,-65 L 22,65 L 0,95 L -22,65 L -22,-65 Z" fill="none" stroke="#00A3FF" strokeWidth="1.5" />
          <path d="M 0,-85 L 12,-55 L 12,55 L 0,85 L -12,55 L -12,-55 Z" fill={`url(#${darkBlueId})`} opacity="0.6" />
          
          {/* The Power Core */}
          <polygon points="0,-45 35,0 0,45 -35,0" fill="rgba(0,163,255,0.15)" stroke="#00A3FF" strokeWidth="2.5" />
          <polygon points="0,-22 17,0 0,22 -17,0" fill={`url(#${coreBlueId})`} opacity="0.95" />

          {/* Axis Data Rings (Wires) */}
          <ellipse cx="0" cy="0" rx="100" ry="24" fill="none" stroke="#00A3FF" strokeWidth="1" opacity="0.75" transform="rotate(30)" />
          <ellipse cx="0" cy="0" rx="100" ry="24" fill="none" stroke="#00A3FF" strokeWidth="1" opacity="0.75" transform="rotate(-30)" />
          <ellipse cx="0" cy="0" rx="100" ry="24" fill="none" stroke="#00A3FF" strokeWidth="1" opacity="0.75" transform="rotate(90)" />
        </g>
      </svg>
      {/* Intense Core Glow */}
      <div className={`absolute inset-0 bg-[#00A3FF] opacity-[0.15] ${glowBlurClass} rounded-full pointer-events-none`}></div>
    </div>
  );
};

export default function App() {
  // Ensure smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-black text-[#E2E8F0] font-sans selection:bg-[#00A3FF] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex items-center justify-between border-b border-white/5 bg-black/50 backdrop-blur-md">
        {/* Logo - Right side in RTL */}
        <div className="flex items-center gap-3" dir="ltr">
          <SovereignLogo className="w-10 h-10 shrink-0" size="small" />
          <div className="font-cinzel font-bold text-3xl tracking-widest text-white uppercase mt-1">
            KLIRIOS
          </div>
        </div>
        
        {/* Links - Center */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-heading font-semibold text-gray-400">
          {[
            { name: "الرئيسية", href: "#" },
            { name: "البنية المعمارية", href: "#architecture" },
            { name: "حلول الشركات", href: "#solutions" }
          ].map((link) => (
            <a key={link.name} href={link.href} className="relative group hover:text-white transition-colors duration-300 py-2">
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#00A3FF] transition-all duration-300 group-hover:w-[60%] group-hover:left-[20%] rounded-full shadow-[0_0_8px_rgba(0,163,255,0.8)]"></span>
            </a>
          ))}
        </div>

        {/* Button - Left side in RTL */}
        <a href="mailto:hadi.business.1b@gmail.com" className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-white hover:border-[#00A3FF]/50 hover:bg-[#00A3FF]/10 transition-all duration-500 rounded-sm px-8 py-3 text-sm font-heading font-bold tracking-wide group inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/0 via-[#00A3FF]/20 to-[#00A3FF]/0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
          <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,163,255,0.8)] shadow-black transition-all duration-300">تواصل معنا</span>
          <div className="absolute inset-0 border border-[#00A3FF] rounded-sm opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
        </a>
      </nav>

      {/* Hero Section (Cinematic & Artistic Corporate Identity) */}
      <section className="relative h-[100vh] min-h-[800px] w-full flex flex-col justify-center items-center bg-black overflow-hidden pointer-events-none selection:bg-transparent">
        
        {/* Deep Aesthetic Background Glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <div className="w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-[#00A3FF] rounded-full opacity-[0.04] blur-[150px]"></div>
          <div className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#00A3FF] rounded-full opacity-[0.06] blur-[100px]"></div>
        </motion.div>

        {/* Central Master Logo Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full flex flex-col items-center justify-center px-4"
        >
          {/* Sovereign Vector Emblem */}
          <SovereignLogo className="w-40 md:w-56 lg:w-[18vw] max-w-[320px] aspect-square mb-8" size="large" />

          {/* Majestic Typographic Wordmark */}
          <div className="text-center w-full flex flex-col items-center">
            <h1 
              className="font-cinzel font-bold text-[13vw] sm:text-[12vw] md:text-[9rem] lg:text-[12rem] leading-[0.8] tracking-[0.1em] ml-[0.1em] uppercase"
              style={{
                background: 'linear-gradient(to bottom, #FFFFFF 0%, #CBD5E1 55%, #475569 85%, #0F172A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))'
              }}
            >
              KLIRIOS
            </h1>
          </div>
        </motion.div>

        {/* Bottom Linear Fade to blend seamlessly into next section */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* Solutions Section (Bento Grid) */}
      <section id="solutions" className="relative z-10 py-32 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 flex flex-col items-center text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              شبكة حلول <span className="text-[#00A3FF] font-cinzel tracking-wider">KLIRIOS</span> السيادية للأعمال
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">بنية تحتية سيادية مصممة خصيصاً للشركات الكبرى لضمان أعلى درجات الأمان، الأداء، والتفوق الاستراتيجي.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bentoCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth GSAP-like easing
                className={`group relative p-10 rounded-xl bg-[#030303] border border-white/5 overflow-hidden hover:border-[#00A3FF]/40 transition-colors duration-700 ${card.colSpan}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/0 to-[#00A3FF]/0 group-hover:from-[#00A3FF]/5 group-hover:to-transparent transition-all duration-700 pointer-events-none z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg w-fit border border-white/5 mb-8 group-hover:border-[#00A3FF]/30 transition-all duration-500 relative">
                    <card.icon className="w-6 h-6 text-white group-hover:text-[#00A3FF] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-heading font-semibold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="relative z-10 py-40 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">المعمارية الذكية الثلاثية للأعمال</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 w-full max-w-6xl">
            {architectureSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 w-full relative">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-32 h-32 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center relative group z-10 cursor-default"
                >
                  <step.icon className="w-10 h-10 text-white group-hover:text-[#00A3FF] transition-colors duration-700 relative z-10" strokeWidth={1.5} />
                  
                  {/* Subtle vector tracing effect simulation */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <circle 
                      cx="64" cy="64" r="63" 
                      fill="none" 
                      stroke="#00A3FF" 
                      strokeWidth="1" 
                      strokeDasharray="400" 
                      strokeDashoffset="400"
                      className="group-hover:animate-[dash_2s_ease-out_forwards]"
                    />
                  </svg>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center mt-8"
                >
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 font-light">{step.desc}</p>
                </motion.div>

                {/* Connecting lines for desktop */}
                {idx < architectureSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-1/2 w-full translate-x-1/2 h-[1px] bg-gradient-to-l from-transparent via-white/10 to-transparent z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="relative z-10 py-32 px-6 bg-[#030303] flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="w-full flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-12 tracking-tight">نخبة الذكاء الاصطناعي بين يديك</h2>
          
          <form action="https://formsubmit.co/hadi.business.1b@gmail.com" method="POST" className="w-full max-w-lg flex flex-col items-center">
            <input type="hidden" name="_subject" value="طلب استشارة استراتيجية جديد!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="w-full relative mb-10">
              <input 
                type="email" 
                name="email"
                required
                placeholder="البريد الإلكتروني المؤسسي" 
                className="w-full bg-black border border-white/10 rounded-md px-6 py-5 text-white text-right focus:outline-none focus:border-[#00A3FF] focus:shadow-[0_0_15px_rgba(0,163,255,0.1)] transition-all font-sans text-lg placeholder:text-gray-600"
                dir="rtl"
              />
            </div>
            
            <button type="submit" className="bg-[#00A3FF] hover:bg-[#0082CC] text-white font-semibold font-sans py-4 px-16 rounded-md transition-all duration-300 text-lg shadow-[0_0_20px_rgba(0,163,255,0.2)] hover:shadow-[0_0_30px_rgba(0,163,255,0.4)]">
              احجز استشارة استراتيجية
            </button>
          </form>
        </motion.div>
        
        <div className="mt-40 flex flex-col items-center gap-4 text-gray-700 font-mono tracking-widest uppercase">
          <span className="text-[10px]">&copy; {new Date().getFullYear()} KLIRIOS. All rights reserved.</span>
          <span className="text-sm font-sans tracking-wide text-gray-500 font-medium">بإدارة رائد الأعمال هادي حسام حسن</span>
        </div>
      </section>

      {/* Tailwind Custom Keyframes for SVG animation */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <ChatWidget />
    </div>
  );
}
