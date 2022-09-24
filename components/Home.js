import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <div className="container"  id="home">
      <h2>{t("home_title")}</h2>
      <h1>{t('home_name')}</h1>
      <h3>{t("home_subheading", {age: 20})}</h3>
      <h3>{t("home_opportunity")}</h3>
    </div>
  )
}
