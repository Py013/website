import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Instafeed: any;
  }
}

interface InstagramFeedProps {
  accessToken: string;
  userId?: string;
  limit?: number;
  template?: string;
}

export function InstagramFeed({
  accessToken,
  userId,
  limit = 9,
  template,
}: InstagramFeedProps) {
  const feedRef = useRef<HTMLDivElement>(null);
  const instafeedRef = useRef<any>(null);

  useEffect(() => {
    function initializeFeed() {
      if (!feedRef.current || !window.Instafeed) return;

      // Limpar instância anterior se existir
      if (instafeedRef.current) {
        feedRef.current.innerHTML = '';
      }

      const defaultTemplate = `
        <a href="{{link}}" target="_blank" rel="noopener noreferrer" class="instagram-post">
          <div class="relative overflow-hidden rounded-lg aspect-square bg-gray-800 group">
            <img 
              src="{{image}}" 
              alt="{{caption}}" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p class="text-white text-sm text-center px-2 line-clamp-3">{{caption}}</p>
            </div>
          </div>
        </a>
      `;

      const config: any = {
        accessToken: accessToken,
        target: feedRef.current,
        limit: limit,
        template: template || defaultTemplate,
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        get: 'user',
      };

      if (userId) {
        config.userId = userId;
      }

      instafeedRef.current = new window.Instafeed(config);
      instafeedRef.current.run();
    }

    // Carregar instafeed.js do CDN se ainda não estiver carregado
    if (!window.Instafeed) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/instafeed.js@2/dist/instafeed.min.js';
      script.async = true;
      script.onload = () => {
        initializeFeed();
      };
      document.body.appendChild(script);
    } else {
      initializeFeed();
    }

    return () => {
      // Cleanup
      if (instafeedRef.current && feedRef.current) {
        feedRef.current.innerHTML = '';
      }
    };
  }, [accessToken, userId, limit, template]);

  return (
    <div className="w-full">
      <div
        ref={feedRef}
        id="instafeed"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
      />
    </div>
  );
}

