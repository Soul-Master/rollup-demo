export async function getKey() {
    const { key } = await import('./component1/d.js');
    
    return key;
  }