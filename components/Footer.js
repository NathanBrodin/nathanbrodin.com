import { useTheme } from "next-themes"

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="sunset">Sunset</option>
          <option value="aurora">Aurora</option>
          <option value="seashore">Seashore</option>
        </select>
    </div>
  )
}
