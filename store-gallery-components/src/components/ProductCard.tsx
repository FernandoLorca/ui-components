import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from './ui/button';
import type { products } from '@/App';

export default function ProductCard({
  product,
}: {
  product: products;
}): JSX.Element {
  return (
    <Card className="flex flex-col justify-between">
      <img
        alt={product.title}
        className="object-cover rounded-t-lg"
        height={500}
        src={product.image}
        style={{
          aspectRatio: '400/500',
          objectFit: 'cover',
        }}
        width={400}
      />
      <div className="flex-grow">
        <CardHeader>
          <a
            href="#"
            className="hover:underline grow"
          >
            <CardTitle>{product.title}</CardTitle>
          </a>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400">{product.description}</p>
        </CardContent>
      </div>
      <CardFooter className="flex flex-col items-start">
        <p className="text-3xl font-semibold">${product.price}</p>
        <Button className="mt-5">Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
