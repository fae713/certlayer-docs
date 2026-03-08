// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  certlayerSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/what-is-certlayer',
        'introduction/problem-and-solution',
        'introduction/key-features',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/core-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/architecture-overview',
        'architecture/system-components',
        'architecture/platform-infrastructure',
        'architecture/hackdetection',
      ],
    },
    {
      type: 'category',
      label: 'Reliability',
      items: [
        'reliability/event-verification',
        'reliability/reliability-score',
        'reliability/use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/developer-overview',
      ],
    },
    {
      type: 'category',
      label: 'Economics',
      items: [
        'economics/protocol-economics',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/security',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'roadmap/roadmap',
      ],
    },
  ],
};

module.exports = sidebars;
