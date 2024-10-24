import { usePathname, useRouter } from 'next/navigation';

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(window.location.search);

  const setParams = (array: { name: string; value: string }[]) => {
    array.forEach((e) => {
      if (!e.value) params.delete(e.name);
      else params.set(e.name, e.value);
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const deleteParams = (array: { name: string }[]) => {
    array.forEach((e) => {
      params.delete(e.name);
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  return { params, setParams, deleteParams };
};
