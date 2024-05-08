import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { products } from '@/types';

export default function ProductCard({
  loading,
  product,
}: {
  loading: boolean;
  product: products;
}): JSX.Element {
  console.log(loading);
  return (
    <Card className="flex flex-col justify-between">
      {loading ? (
        <Skeleton className="w-[300px] h-[500px] rounded-t-lg" />
      ) : (
        <a
          href="#"
          className="hover:opacity-95"
        >
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
        </a>
      )}
      <div className="flex-grow">
        <CardHeader>
          {loading ? (
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          ) : (
            <a
              href="#"
              className="pb-2"
            >
              <Badge>{product.category}</Badge>
            </a>
          )}
          <a
            href="#"
            className="hover:underline grow"
          >
            <CardTitle>
              {loading ? (
                <>
                  <Skeleton className="w-full h-[20px] rounded-full mb-2" />
                </>
              ) : (
                product.title
              )}
            </CardTitle>
          </a>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400">
            {loading ? (
              <>
                <Skeleton className="w-full h-[20px] rounded-full mb-2" />
                <Skeleton className="w-full h-[20px] rounded-full mb-2" />
                <Skeleton className="w-full h-[20px] rounded-full" />
              </>
            ) : (
              product.description
            )}
          </p>
        </CardContent>
      </div>
      <CardFooter className="flex flex-col items-start">
        <p className="text-3xl font-semibold">
          {loading ? (
            <Skeleton className="w-full h-[40px] rounded-full mb-2" />
          ) : (
            `$${product.price}`
          )}
        </p>
        <Button className="mt-5">Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
