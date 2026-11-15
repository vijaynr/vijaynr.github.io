export interface Project { title: string; meta: string; description: string; link?: string; }
export const projects: Project[] = [
  {
    "title": "Single Sign On",
    "meta": "OpenText · Java · Spring · Angular",
    "description": "Integrated Microsoft Entra ID to support hybrid users, with a provider-independent design that supports other OpenID Connect (OIDC) providers."
  },
  {
    "title": "PeerView",
    "meta": "Open source · Bun · TypeScript · LLMs",
    "description": "A command-line tool for LLM-powered GitHub pull request and GitLab merge request workflows: review, summarize, chat and create.",
    "link": "https://github.com/vijaynr/peerview"
  },
  {
    "title": "Mac Kernel Extension",
    "meta": "OpenText",
    "description": "A macOS kernel extension that detects and stops unnecessary downloads of archived files on network mounts.",
    "link": "https://www.microfocus.com/documentation/open-enterprise-server/2023/cis_admin_lx/t4b3w08q8icu.html"
  },
  {
    "title": "Multi Factor Authentication",
    "meta": "OpenText · Java · Spring",
    "description": "A Backend for Frontend Proxy and OAuth2 implementation designed for both confidential and public clients."
  },
  {
    "title": "File Versioning",
    "meta": "OpenText · Java · Spring · Angular",
    "description": "A flat-file versioning system for storing, managing and cleaning up file versions through configurable policies."
  },
  {
    "title": "Thumbnail Previews",
    "meta": "OpenText · Java · AWT · FFMPEG · Angular",
    "description": "Thumbnail generation and display for documents, videos and CAD files in Filr."
  }
];
