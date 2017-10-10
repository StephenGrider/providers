export const fetchProviders = () => {
  return {
    type: 'fetch_providers',
    payload: [
      { type: 'air', name: 'Air Provider #1' },
      { type: 'water', name: 'Water Provider #1' },
      { type: 'custom', name: 'Custom Provider #1' }
    ]
  };
};
