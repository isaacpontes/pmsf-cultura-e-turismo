import Head from 'next/head'
import imgCover from '@/assets/images/igreja-matriz.jpg'
import LayoutWithHeader from '@/layouts/LayoutWithHeader'
import TourCard from '@/components/TourCard'
import imgSantuario from '@/assets/images/igreja-matriz-antiga.jpg'
import imgPonte from '@/assets/images/ponte-metalica.jpg'
import imgPraca from '@/assets/images/praca-guilherme-tito.jpg'
import imgRio from '@/assets/images/rio-paraiba.jpg'
import imgRecreio from '@/assets/images/cachoeira-recreio.jpg'
import imgOriente from '@/assets/images/cachoeira-oriente.jpg'
import imgTresPanelas from '@/assets/images/cachoeira-tres-panelas.jpg'
import imgParque from '@/assets/images/parque-desengano.jpeg'
import imgSolar from '@/assets/images/solar-barao-vila-flor.jpeg'
import imgPontePreta from '@/assets/images/ponte-preta.jpg'
import imgCruzeiro from '@/assets/images/morro-do-cruzeiro.png'
import imgPocoParado from '@/assets/images/poco-parado.jpg'
import imgRioDoColegio from '@/assets/images/rio-do-colegio.jpg'

const ATTRACTIONS = [
  {
    img: imgSantuario,
    title: "Santuário de São Fidélis",
    description: "Templo histórico ao redor do qual cresceu a Cidade Poema, começou a ser construído pelos indígenas e negros escravizados em 1799 e foi inaugurado em 23 de abril de 1809, seguindo o projeto dos frades fundadores, os italianos Frei Ângelo de Lucca e Frei Vitório de Cambiasca. A majestosa igreja mescla elementos barrocos, neoclássicos e românticos, abrigando imagens católicas dos séculos XVIII e XIX, bem como pinturas do espanhol Úbeda Marín e dos brasileiros Romanelli e Fuad Mattar, nascido em São Fidélis. Destaquem-se ainda as suas catacumbas, origem de lendas e histórias do folclore fidelense. Tombada em 2002 pelo INEPAC, o templo foi elevado à categoria de Santuário no dia 24 de abril de 2022, respondendo a antigo desejo dos conterrâneos."
  },
  {
    img: imgPonte,
    title: "Ponte Metálica Pastor Walter Velasco",
    description: "Belo exemplar artístico e arquitetônico sobre o Rio Paraíba do Sul, ligando São Fidélis a seu 2º distrito, a Ipuca. De origem inglesa, sua construção data de 1889. Originalmente era usada para o transporte ferroviário, auxiliando no escoamento da produção agrícola de São Fidélis e de toda a região. Feitas as alterações e acompanhando os novos tempos, foi adaptada posteriormente para a malha rodoviária, ganhando a alcunha de “ponte de um carro só”, já que permitia o trânsito em sentido único a cada vez. Com a inauguração de uma nova ponte para os automóveis, a Ponte Metálica, tombada pelo INEPAC em 2002, hoje é exclusiva para pedestres e ciclistas, tornando-se local para a prática de esportes ao ar livre, o encontro de amigos e a contemplação dos lindos nascer e pôr do sol fidelenses."
  },
  {
    img: imgPraca,
    title: "Praça Guilherme Tito de Azevedo",
    description: "Principal praça do município, abrigando o Jardim Getúlio Vargas, de contornos primorosos. Árvores com sombras acolhedoras ao longo do dia, vida noturna dinâmica e segura, espaços para o encontro de familiares e amigos, locais de diversão para as crianças. Tudo isso pode ser encontrado na Praça, que ainda conta com a Feira de Artesanato, local onde se veem as artes de nossa terra, e preparada rede de serviços ao seu redor. Em torno estão ainda alguns importantes patrimônios históricos e culturais: o Santuário de São Fidélis, de 1809, e o Solar do Barão de Vila Flor, de 1847."
  },
  {
    img: imgRio,
    title: 'Rio Paraíba do Sul',
    description: 'Um dos mais importantes rios do Brasil em termos econômicos passa por São Fidélis criando paisagens belas e inspiradoras. Com largura média de 450m, por ele chegaram os frades fundadores, os italianos Frei Ângelo de Lucca e Frei Vitório de Cambiasca. Tendo uma profundidade média entre 1m e 5m, é abundante em peixes, que são pescados seguindo diversas técnicas, principalmente a rede, a gaiola e a tarrafa. Dele também vinha a principal atração da saudosa Festa da Lagosta, evento de reconhecimento internacional. O Rio Paraíba do Sul é de importância vital para o abastecimento de água à cidade, assim como para a manutenção da agricultura e da pesca como atividades econômicas especiais do município, e por isso merece e precisa ser bem cuidado por todos.'
  },
  {
    img: imgRecreio,
    title: 'Cachoeira do Recreio',
    description: 'Com altura aproximada de 70m e largura de 10m, forma-se junto ao topo de um morro na Serra do Recreio uma queda de águas límpidas e agradáveis para o banho nas piscinas naturais que se criam. Localizada em área de Mata Atlântica preservada, é um convite a fidelenses e turistas a se reconectarem com a natureza, do mesmo modo que desperta para a importância do cuidado com nossa casa em comum. É prestigiada ainda como destino para praticantes dos esportes de aventura, principalmente aqueles que fazem trilhas de ciclismo de montanha.'
  },
  {
    img: imgTresPanelas,
    title: 'Cachoeira das Três Panelas',
    description: 'Um dos atrativos naturais mais procurados por banhistas no leito do Rio do Colégio é perfeito para passar momentos de alegria e lazer com familiares e amigos. Por comparação, é de acesso fácil, o que proporciona ser a opção ideal para todas as idades. Chamam a atenção as formações de grandes crateras nas pedras de sua área, dando origem ao nome deste lugar. Com o devido cuidado, elas podem ser aproveitadas como deliciosas piscinas naturais por todos os visitantes.'
  },
  {
    img: imgOriente,
    title: 'Cachoeira do Oriente',
    description: 'Com área aproximada de 70m e altura média de 10m, destacam-se nos atrativos três saltos intercalados por pequenos patamares em rochas banhadas por águas límpidas. Ao seu redor encontram-se vegetações de alto e médio porte, bem como ocorrem lindas espécies de cactos e bromélias. A formação geológica do local encanta a vista e cria os saltos, atrações principais que causam a admiração, mas que requerem os cuidados e atenção devidos. Com as quedas d’água, praias e piscinas naturais, a Cachoeira do Oriente é destino certo para aproveitar as belezas da Cidade Poema e curtir com familiares e amigos.'
  },
  {
    img: imgParque,
    title: 'Parque Estadual do Desengano',
    description: 'Criado pelo Decreto-lei de 13 de abril de 1970, é a mais antiga Unidade de Conservação do estado do Rio de Janeiro e um dos últimos remanescentes de grande expressividade da Mata Atlântica no Norte Fluminense. Sua localização abrange, além de São Fidélis, os munícipios de Campos dos Goytacazes e Santa Maria Madalena. Em sua fauna e flora foram catalogadas centenas de espécies raras, em extinção e até mesmo endêmicas, isto é, que existem apenas nesta região. Com trilhas, rios, cachoeiras e rede de serviços turísticos conscientes do papel de preservação ambiental, o Parque é ideal para passeios de todos os estilos, da prática do turismo de aventura à observação de pássaros ou do céu noturno: em 2021, a unidade se tornou o primeiro lugar da América Latina a receber o título de Dark Sky Park, concedido para locais de qualidade excepcional para a observação de noites estreladas e um ambiente noturno protegido que valoriza seu patrimônio científico, natural, educacional, cultural e social.'
  },
  {
    img: imgSolar,
    title: 'Solar do Barão de Vila Flor',
    description: 'Construído em 1847 por ordem de João Manoel de Souza, o Barão de Vila Flor, para hospedar o Imperador D. Pedro II e integrantes de sua família na primeira de cinco visitas que seriam feitas a São Fidélis. Posteriormente se tornou a residência oficial da família do Barão, que anteriormente morava na Fazenda São Benedito. Após quase um século, o imóvel foi doado ao município por Maria Elysia de Araújo Luna, trineta do Barão, para abrigar uma biblioteca e um museu públicos, instituições que até hoje funcionam no antigo casarão e que atuam na preservação, estímulo e divulgação da memória e da cultura fidelenses, com riquíssimo acervo disponibilizado. Tombado em 2002 pelo INEPAC, no Solar também opera a sede da Secretaria Municipal de Cultura e Turismo.'
  },
  {
    img: imgPontePreta,
    title: 'Ponte Ferroviária',
    description: 'Conhecida como “Ponte Preta”, está sobre o Rio Paraíba do Sul ostentando um dos mais belos cartões postais da Cidade Poema. Construída pela Estrada de Ferro Leopoldina Railway em fins do século XIX, era ardentemente desejada por todos que usavam os trens da companhia, mas que precisavam atravessar o rio de barco depois de saírem dos vagões por causa da inexistência de uma via. Sua construção também oportunizou o escoamento da produção agrícola de toda a região. Com a desativação dos trilhos, a Ponte Ferroviária permaneceu como destino turístico para a produção de belas fotografias, seja da ponte, seja da natureza que dali se contempla.'
  },
  {
    img: imgPocoParado,
    title: "Poço Parado",
    description: "Localidade serrana de muita sombra, cachoeiras encantadoras, águas cristalinas e exuberantes fauna e flora da Mata Atlântica em terras fidelenses, Poço Parado é o destino ideal para quem quer curtir a natureza com familiares e amigos. Encontra-se no Parque Estadual do Desengano, com vegetação de médio e grande porte e formações geológicas surpreendentes."
  },
  {
    img: imgRioDoColegio,
    title: "Rio do Colégio",
    description: "Ao longo de 35km exclusivamente fidelenses, o Rio do Colégio apresenta cachoeiras, praias e piscinas naturais que encantam a todos. Munícipes e turistas aqui se encontram para aproveitar as belezas da natureza em pontos de lazer e também para se saciar na apreciação da culinária local. Com acessos pela RJ 158 ou pela estrada que atravessa a comunidade de Vargem Grande, o Rio do Colégio é atração turística propícia em qualquer época do ano, com os cuidados e atenção devidos, para banhos, passeios ciclísticos, contemplação da natureza entre outras formas de aproveitar o patrimônio ambiental. "
  },
  {
    img: imgCruzeiro,
    title: 'Morro do Cruzeiro',
    description: 'A poucos quilômetros do centro da cidade, no Barreiro, o Morro do Cruzeiro oferece uma das mais belas vistas panorâmicas de São Fidélis. De fácil acesso, podendo ser alcançado de carro, motocicleta ou mesmo a pé num caminho de média intensidade, o local é propício a práticas de esporte ao ar livre, passeios com familiares e amigos e contemplação da encantadora paisagem.'
  },
]

export default function Turismo() {
  return (
    <>
      <Head>
        <title>Turismo | Conheça São Fidélis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWithHeader coverImg={imgCover} title="Turismo">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            margin: "4rem 0"
          }}
        >
          {ATTRACTIONS.map(attraction =>
            <TourCard
              key={attraction.title}
              img={attraction.img}
              title={attraction.title}
              description={attraction.description}
            />
          )}
        </section>
      </LayoutWithHeader>
    </>
  )
}
