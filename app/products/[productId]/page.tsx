export default function Page({ params }: { params: { productId: string } }) {
  return <div>My product: {params.productId}</div>;
}
