export default function json(data: unknown) {
  return JSON.parse(JSON.stringify(data, (_, value) => (typeof value === 'bigint' ? Number(value) : value)));
}
