import { Header } from '../../components/Header'
import { SectionCard } from '../../components/SectionCard'
import disney from '../../assets/disney.jpg'
import franca from '../../assets/frança.jpg'
import dubai from '../../assets/dubai2.jpg'
import portugal from '../../assets/portugal-2.jpg'
import './styles.css'

export function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <SectionCard photo={disney} title="Disney" description="Você sempre quis ir pra Disney, mas não sabe por onde começar? Então aqui é o lugar para tirar todas as dúvidas e se programar para conhecer o mundo mágico do Mickey, Minnie, Pateta e todos aqueles personagens que fazem parte da sua vida! Encontre todas as informações sobre os parques Walt Disney World Resort (Orlando), Disneyland Resort (Califórnia) e Disneyland Paris (França), além do dos Disney Cruise Line, onde você poderá viver toda a experiência Disney em alto mar! Basta clicar nos links de cada complexo para ter acesso às atrações, hospedagem, restaurantes, roteiros de cruzeiros e muito mais! Divirta-se no mundo Disney!" />
        <SectionCard photo={franca} title="França" description="eve ser por causa da comida, delicadamente saborosa e refinada. Ou pelos vinhos, atrás dos quais peregrinam enólogos do mundo inteiro. Talvez por sua empolgante variedade geográfica, rica em montanhas, campos de flores, praias. Ou de repente é por seu riquíssimo e preservado legado cultural e arquitetônico – venha ele do período galo-romano, medieval ou renascentista. A explicação pode estar na maravilha que é Paris. Enfim, deve ser por alguns desses motivos, ou melhor, pela combinação de todos, que dados da Organização Mundial de Turismo revelam que a cada ano a França" />
        <SectionCard photo={portugal} title="Portugal" description="Uma viagem para Portugal é o sonho de muitos brasileiros. E não faltam motivos para isso: além da facilidade da língua, as cidades de Portugal reúnem história, beleza arquitetônica e paisagens incríveis, comida maravilhosa e um dos melhores custo-benefício entre os países da Europa. Neste post trazemos tudo sobre Portugal: quantos dias ficar, quando ir, principais regiões turísticas, roteiros, como se deslocar, hospedagem, alimentação e custos com hospedagem, alimentação e passeios. Confira todas as nossas dicas!" />
        <SectionCard photo={dubai} title="Dubai" description="Mais moderna do que tradicional em relação aos outros territórios dos Emirados Árabes Unidos, Dubai passou por cima de seu clima desértico para chamar a atenção do mundo. A capital de mesmo nome combina um grande centro de negócios, lojas de luxo e muitas atrações para os visitantes. Quando se fala em Dubai logo vem à mente construções arrojadas, frutos da riqueza vinda do petróleo. E isso é verdade. Nas últimas duas décadas, sobretudo, não parou de erguer arranha-céus de esplendorosa arquitetura. Entre os que mais atraem a atenção estão o Burj Khalifa, considerado o mais alto do mundo, e o Burj Al Arab, com a forma de uma vela." />
      </div>
    </>
  )
}