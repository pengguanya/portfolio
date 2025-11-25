export const getGreetings = (name) => {
  // Use first name for a friendlier greeting
  const friendlyName = name.split(" ")[0];

  return [
  { lang: 'en', text: `Hi, I'm ${friendlyName}` },
  { lang: 'de', text: `Hallo, ich bin ${friendlyName}` },
  { lang: 'fr', text: `Bonjour, je suis ${friendlyName}` },
  { lang: 'it', text: `Ciao, sono ${friendlyName}` },
  { lang: 'es', text: `Hola, soy ${friendlyName}` },
  { lang: 'pt', text: `Olá, eu sou ${friendlyName}` },
  { lang: 'zh-CN', text: `你好, 我是冠亚` }, 
  { lang: 'ja', text: `こんにちは、グァンヤです` }, 
  { lang: 'ru', text: `Привет, я Гуанья` }, 
  { lang: 'pl', text: `Cześć, jestem ${friendlyName}` }, 
  { lang: 'sv', text: `Hej, jag är ${friendlyName}` }, 
  { lang: 'ar', text: `أهلاً، أنا غوانيا` }, 
  { lang: 'ko', text: `안녕하세요, 관야예요` }, 
  { lang: 'hi', text: `नमस्ते, मैं गुआन्या हूँ` }, 
  ];
};