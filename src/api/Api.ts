export async function fetchGoods(
  request: string = 'https://63eb6daef1a969340db7eb45.mockapi.io/technics'
): Promise<any> {
  return (await fetch(request)).json();
}
