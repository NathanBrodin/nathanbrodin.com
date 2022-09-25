import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <div id="home">
      <h1>{t("home_title")}</h1>
      <h1>{t('home_name')}</h1>
      <p>{t("home_subheading", {age: 20})}</p>
      <p>{t("home_opportunity")}</p>
    </div>
  )
}
