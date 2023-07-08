import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
          <span>{serverTime.value.date}</span>
    </footer>
  );
});
