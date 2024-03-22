export async function loadComponent1() {
    const { Component1 } = await import('./component1/c.js');

    return new Component1();
}