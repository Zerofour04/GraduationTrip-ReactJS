import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TravelAdvice() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="https://media.discordapp.net/attachments/517028743357792258/1097613128583352571/de-amt.png?width=608&height=608">
          </Avatar>
        }

        title="Quelle: Auswärtiges Amt"
        subheader="Stand - 16.04.2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.kroati.de/images/uploads/reisefuehrer/kroatien/istrien/banjole/banjole_panorama_01_900x506.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hier stehen alle wichtigen Informationen/Bestimmungen, die für Kroatien gelten.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>Aktuelles</h3>
          <h4>COVID-19</h4>
          <Typography paragraph>
            -Einreisen nach Kroatien sind aus Deutschland, den EU-Mitgliedsstaaten und Drittstaaten ohne pandemiebedingte Einschränkungen möglich.
            Die Pflicht zum Tragen eines Mund-Nasen-Schutzes gilt derzeit nur in medizinischen und Pflegeeinrichtungen.
          </Typography>
          <h3>Sicherheit</h3>
          <h4>Kriminalität</h4>
          <Typography paragraph>
            In Kroatien ist die Straßenkriminalität sehr gering, auch Gewaltdelikte sind selten. Kleinkriminalität wie Taschendiebstähle und Eigentumsdelikte kommen vor allem in Touristengebieten vor, ebenso in Zagreb in den Nachtstunden, am Hauptbahnhof und in einer nahe gelegenen unterirdischen Ladenpassage sowie am Busbahnhof.
            Diebstähle erfolgen meist durch Autoaufbrüche und am Strand. In Ferienwohnungen und bei Übernachtungen im Wohnmobil auf Autobahnrastplätzen an der Nord-Südroute kommt es im Sommer zu Einbruchdiebstählen unter Verwendung von Betäubungsmitteln. Vereinzelt werden in Bars und Nachtklubs stark überhöhte Preise verlangt, die teils unter Androhung von Gewalt eingefordert werden.
          </Typography>
          <tr>
            <li>Geld, Ausweise, Führerschein und andere wichtige Dokumente sicher aufheben, und Kopien für Notfälle anfertigen. Besonders aufmerksam sein und auf die Wertsachen zu achten.
            </li>
            <li>Zahlen Sie möglichst bargeldlose oder führen Sie nur das für den Tag benötigte Bargeld mit sich.
            </li>
            <li>Parken Sie möglichst auf bewachten Parkplätzen bzw. Campingplätzen und übernachten Sie nicht auf Autobahnraststätten und –Parkplätzen.</li>
            <li>Lassen Sie keine Wertsachen und Dokumente im Auto oder an Strand zurück.</li>
          </tr>
          <h3>Natur und Klima</h3>
          <Typography paragraph>
            - Wetterbericht anschauen! Auch oben wurde ein Wetterbericht gelistet
          </Typography>
          <Typography paragraph>
            - Es herrscht an der Küste ein mediterranes, im Landesinneren gemäßigt kontinentales Klima.
          </Typography>
          <h3>Reiseinfos</h3>
          <h4>Einreise und Zoll</h4>
          <Typography paragraph>
            -Die Einreise ist für deutsche Staatsangehörige mit folgenden Dokumenten möglich: Reisepass, Vorläufiger Reisepass, Personalausweis, Vorläufiger Personalausweis, Kinderreisepass
          </Typography>
          <h4>Anmerkungen</h4>
          <Typography paragraph>
            - Reisedokumente müssen für die Dauer des Aufenthalts gültig sein.
          </Typography>
          <h4>Minderjährige</h4>
          <Typography paragraph>
            - Es sind keine besonderen Bestimmungen für die Einreise Minderjähriger bekannt.
          </Typography>
          <h4>Grenzkontrollen</h4>
          <Typography paragraph>
            - Kroatien ist seit 2023 Mitgliedstaat des Schengener Abkommens. Bei Ein- und Ausreise auf dem Landweg über die slowenisch-kroatische oder ungarisch-kroatische Grenze entfällt ab diesem Datum die Grenz- und Passkontrolle.
          </Typography>
          <h4>Einfuhrbestimmungen</h4>
          <Typography paragraph>
            - Die Ein- und Ausfuhr von Waren aus den bzw. in die übrigen EU- Staaten unterliegt den Bestimmungen der Europäischen Union. Warenkontrollen finden nicht statt, Stichprobenkontrollen im Rahmen der polizeilichen Überwachung der Grenzen und der polizeilichen Kontrolle des grenzüberschreitenden Verkehrs können nicht ausgeschlossen werden. Diese verdachtsunabhängigen Kontrollen erfolgen durch dazu ermächtigte Zollbeamte und werden mit einer Anhaltekelle mit der Aufschrift „Stop Carina“ angekündigt. Es sind Überprüfungen von Fahrzeugen, deren Insassen und insbesondere der mitgeführten Waren, inklusive des Reisegepäcks, möglich.
          </Typography>
          <Typography paragraph>
            - Einfuhren aus Drittstaaten unterliegen gesonderten Bestimmungen. Bei der Einfuhr bestimmter Artikel aus Drittstaaten auf dem Landweg gelten folgende Obergrenzen:
          </Typography>
          <tr>
            <li>40 Zigaretten</li>
            <li>20 Zigarillos (bis 3 g Gewicht pro Zigarillo)</li>
            <li>10 Zigarren</li>
            <li>50g Zigarettentabak</li>
            <li>50g Heat-Tabak</li>
            <li>10ml Flüssigkeit für E-Zigaretten</li>
          </tr>

          <h4>Infrastruktur/Verkehr</h4>
          <Typography paragraph>
            - Es gibt ein Eisenbahn- und ein gut ausgebautes Autobahn- und Schnellstraßennetz, sowie Schiffsverkehr zu den Inseln.
            Auf den Autobahnen wird eine streckenabhängige Mautgebühr erhoben, die an den Mautstationen in EUR in bar oder per Kredit- bzw. Bankkarte zu entrichten ist.
          </Typography>
          <Typography paragraph>
            - Es gilt eine Promillegrenze von 0,5 und für Fahrer unter 25 Jahren eine Grenze von 0,0 Promille.
          </Typography>
          <Typography paragraph>
            - Der deutsche Führerschein ist ausreichend.
          </Typography>
          <h3>Rechtliche Besonderheiten</h3>
          <Typography paragraph>
            - Der Handel mit Drogen wird hart bestraft, die Mindeststrafe beträgt drei Jahre auch bei geringen Mengen.
          </Typography>
          <Typography paragraph>
            - Das Sammeln von fossilen Fundstücken und archäologischen Gegenständen, aber auch von geschützten und wertvollen Muscheln wie der Großen Steckmuschel ist verboten und kann hohe Strafen nach sich ziehen.
          </Typography>
          <h4>Geld/Kreditkarten</h4>
          <Typography paragraph>
            - Die bisherige Landeswährung Kuna (HRK) ist im Januar 2023 durch den EUR abgelöst worden. Kreditkarten werden in den meisten Hotels, Restaurants, Tankstellen und in Geschäften akzeptiert. Bargeldabhebungen sind an den meisten Bankautomaten mit der deutschen Bank- oder Kreditkarte möglich.          </Typography>
          <h3>Gesundheit</h3>
          <h4>Impfschutz</h4>
          <Typography paragraph>
            Für die Einreise nach Kroatien sind keine Pflichtimpfungen vorgeschrieben.
          </Typography>
          <tr>
            <li>Achten Sie darauf, dass sich bei Ihnen und Ihren Kindern die Standardimpfungen gemäß Impfkalender des Robert-Koch-Instituts auf dem aktuellen Stand befinden.</li>
            <li>Als Reiseimpfungen werden Impfungen gegen Hepatitis A, bei Langzeitaufenthalt oder besonderer Exposition auch gegen Hepatitis B, Tollwut und FSME empfohlen.</li>
          </tr>
          <Typography paragraph>
            - Im Norden des Landes kann es zwischen Mai und August zur Übertragung der Frühsommer-Meningoenzephalitis (FSME) durch Zeckenstiche kommen.
          </Typography>
          <Typography paragraph>
            - Es wird empfohlen sich zu schützen gegen West-Nil-Fieber
          </Typography>
          <h4>Medizinische Versorgung</h4>
          <Typography paragraph>
            - Akute ärztliche Behandlung und Krankenhausbehandlung ist unter Vorlage der Europäischen Krankenversicherungskarte einer deutschen gesetzlichen Krankenversicherung möglich. Unter Umständen müssen Zuzahlungen zu bestimmten Untersuchungen, Behandlungen und Medikamenten geleistet werden. In Einzelfällen wird eine umgehende Bezahlung der Behandlungskosten verlangt; in solchen Fällen empfiehlt es sich, eine detaillierte Rechnung ausstellen zu lassen. Kosten für die Rückführung werden von den gesetzlichen Krankenkassen nicht übernommen; der Abschluss einer privaten Reisekrankenversicherung wird daher angeraten.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}