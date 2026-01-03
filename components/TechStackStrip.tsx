'use client';

interface TechItem {
  name: string;
  label: string;
  color: string;
  logoSrc: string;
}

export default function TechStackStrip() {
  const techStack: TechItem[] = [
    { name: 'java', label: 'Java 21', color: '#ED8B00', logoSrc: '/logos/java.svg' },
    { name: 'spring', label: 'Spring Boot', color: '#6DB33F', logoSrc: '/logos/spring.svg' },
    { name: 'git', label: 'Git', color: '#F05032', logoSrc: '/logos/git.svg' },
    { name: 'github', label: 'Github', color: '#181717', logoSrc: '/logos/github.png' },
    { name: 'linux', label: 'Linux (Bash)', color: '#FCC624', logoSrc: '/logos/linux.svg' },
    { name: 'postgresql', label: 'PostgreSQL', color: '#336791', logoSrc: '/logos/postgresql.png' },
    { name: 'redis', label: 'Redis Cache', color: '#DC382D', logoSrc: '/logos/redis.svg' },
    { name: 'kafka', label: 'Apache Kafka', color: '#231F20', logoSrc: '/logos/kafka.png' },
    { name: 'docker', label: 'Docker', color: '#2496ED', logoSrc: '/logos/docker.svg' },
    { name: 'kubernetes', label: 'Kubernetes', color: '#326CE5', logoSrc: '/logos/kubernetes.svg' },
  ];

  return (
    <div className="w-full py-8 border-b border-white/5 bg-black/20">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 px-4">
        {techStack.map((tech) => (
          <div key={tech.name} className="relative group">
            <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-500 ease-out">
              <img
                src={tech.logoSrc}
                alt={tech.label}
                className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
              />

              <div
                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: tech.color }}
              />
            </div>

            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 rounded shadow-2xl opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap">
              <p className="text-[10px] font-bold tracking-widest uppercase text-white">
                {tech.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
