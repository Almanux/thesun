import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SateliteDetailComponent } from './satelite-detail/satelite-detail.component';
import { CreateStormComponent } from './create-storm/create-storm.component';
import { SolarWindDetailComponent } from './solar-wind-detail/solar-wind-detail.component';
import { MisionsInfoComponent } from './misions-info/misions-info.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from './data-service.service';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('windSoundBtn') windSoundBtn!: ElementRef;
  @ViewChild('pageHeader') pageHeader!: ElementRef;
  @ViewChild('tituloText') tituloText!: ElementRef;
  @ViewChild('sunData') sunData!: ElementRef;
  @ViewChild('frase') frase!: ElementRef;

  windSound:any;

  title = 'theSun';
  model = {
    titulo: "The Solar Wind",
    showHowTo: true,
    frases: {
      selected: "",
      posibles: [
        "Perhaps it was the love of the planets or perhaps my growing dislike for the one I lived on, but from what I can remember I have always dreamed of going to space. (GATTACA Film)",
        "The idea came like a flash of lightning and in an instant, the truth was revealed. The sun is the spring that drives everything. The sun preserves human life and supplies all human energy. Throughout space there is energy",
        "The domination of space by man is the greatest adventure and the most inspiring undertaking.",
        "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. (Nikola Tesla)",
        "I didn't feel like a giant. I felt very, very small (Neil Armstrong)",
        "The probability of success is difficult to estimate; but if we never look for the possibility, the success will be zero"
      ]
    },
    misiones: {
      popTitle: "Misions study sun and solar wind",
      popInfo: "Since the solar wind fills the space between the planets, it is important to know its main characteristics when we want to travel through this environment with spacecraft. The solar wind is a determining factor for the immediate environment of the Earth. For this reason there are so many missions with the aim of studying and predicting it. Having a few seconds to spare before a Carrington event can be the difference between a global catastrophe or a wonderful spectacle."
    },
    controlValues: {
      temp : {
        color: "",
        equivalencias: {min: 1, max: 60}, 
        rangoNormal: {min: 50000, max: 300000}, 
        rangoPosible: {min: 10000, max: 1000000},
        temperaturas: { raw: 0, real: "", cent: "", faren: "", visible: "", actual: 0},
        popTitle: "Equivalent temperature on earth",
        popDesc: "The goal is to bring the solar wind temperature value closer to a recognizable value on the human scale. For this reason we have created temperature equivalencies from ºK to ºC and ºF. Also, the color of several of the elements on this page change based on the current temperature of the solar wind. Click to see the value in other units",
        activityData: {
        low: {
          sound: "",
          pCssEfect: "temperatura1",
          sCssEfect: "",
          tCssEfect: ""
        },
        mid: {
          sound: "",
          pCssEfect: "temperatura2",
          sCssEfect: "",
          tCssEfect: ""
        },
        high: {
          sound: "",
          pCssEfect: "temperatura3",
          sCssEfect: "",
          tCssEfect: ""
        }
      }},
      wind: {
        rangoNormal: {min: 350, max: 500},
        rangoPosible: {min: 200, max: 800},
        windInfo: {
          title: "Solar Wind Info", 
          outDesc: "The solar wind continuously flows outward from the Sun and consists mainly of protons and electrons in a state known as a plasma. Solar magnetic field is embedded in the plasma and flows outward with the solar wind. Click to open.",
          image: "assets/solar_wind.png",
          desc: "The solar wind continuously flows outward from the Sun and consists mainly of protons and electrons in a state known as a plasma. Solar magnetic field is embedded in the plasma and flows outward with the solar wind.<br><br>Different regions on the Sun produce solar wind of different speeds and densities. Coronal holes produce solar wind of high speed, ranging from 500 to 800 kilometers per second. The north and south poles of the Sun have large, persistent coronal holes, so high latitudes are filled with fast solar wind. In the equatorial plane, where the Earth and the other planets orbit, the most common state of the solar wind is the slow speed wind, with speeds of about 400 kilometers per second. This portion of the solar wind forms the equatorial current sheet.<br><br>During quiet periods, the current sheet can be nearly flat. As solar activity increases, the solar surface fills with active regions, coronal holes, and other complex structures, which modify the solar wind and current sheet. Because the Sun rotates every 27 days, the solar wind becomes a complex spiral of high and low speeds and high and low densities that looks like the skirt of a twirling ballerina (see figure). When high speed solar overtakes slow speed wind, it creates something known as a corotating interaction region. These interaction regions consist of solar wind with very high densities and strong magnetic fields<br><br>Above the current sheet, the higher speed solar wind typically has a dominant magnetic polarity in one direction and below the current sheet, the polarity is in the opposite direction. As the Earth moves through this evolving ballerina skirt, it is sometimes within the heliospheric current sheet, sometimes above it and sometime below it. When the magnetic field of the solar wind switches polarity, it is a strong indication that Earth has crossed the current sheet. The location of the Earth with respect to the current sheet is important because space weather impacts are highly dependent on the solar wind speed, the solar wind density, and the direction of the magnetic field embedded in the solar wind.<br><br>Each of the elements mentioned above play a role in space weather. High speed winds bring geomagnetic storms while slow speed winds bring calm space weather. Corotating interaction regions and to a lesser extent, current sheet crossings, can also cause geomagnetic disturbances. Thus specifying and forecasting the solar wind is critical to developing forecasts of space weather and its impacts at Earth.",
          links: ["https://www.swpc.noaa.gov/phenomena/solar-wind", "https://sci.esa.int/web/cluster/-/36652-solar-wind", "https://science.nasa.gov/science-news/news-articles/effects-of-the-solar-wind"]
        },
        value: "",
        popTitle: "Solar Wind",
        soundActive: false,
        currentVariant: {
          sound: "",
          info: "",
          pColor: "",
          sColor: "",
          tColor: "",
          pCssEfect: "",
          sCssEfect: "",
          tCssEfect: ""
        },
        variants: {
          low: {
            sound: "assets/sonidos/wind_low.mp3",
            info: "This sound represents the intensity of the solar wind which is currently ##CURRENT_VALUE##. It is below normal, in these circumstances it is more dangerous to do spacewalks, so if you were thinking of doing one now, we think it is better to wait for it to normalize. click to see and listen",
            pColor: "",
            sColor: "",
            tColor: "",
            pCssEfect: "",
            sCssEfect: "",
            tCssEfect: ""
          },
          mid: {
            sound: "assets/sonidos/wind_mid.mp3",
            info: "This sound represents the intensity of the solar wind which is currently ##CURRENT_VALUE##. But don't worry, it's within the normal range. click to see and listen",
            pColor: "",
            sColor: "",
            tColor: "",
            pCssEfect: "",
            sCssEfect: "",
            tCssEfect: ""
          },
          high: {
            sound: "assets/sonidos/wind_high.mp3",
            info: "This sound represents the intensity of the solar wind which is currently ##CURRENT_VALUE##. It is higher than usual, the Northern Lights could be generated at unusual latitudes. We recommend you check if there are alarms in this regard, in high quantities it can cause damage to electrical systems, navigation systems and satellites. But if it's just an isolated event and you're lucky enough to be close to the Northern Lights, enjoy the moment. click to see and listen",
            pColor: "",
            sColor: "",
            tColor: "",
            pCssEfect: "",
            sCssEfect: "",
            tCssEfect: ""
          }
        }
      },
      dens: {max: 0, min: 0, activityData: {
        low: {
          sound: "",
          pColor: "",
          sColor: "",
          tColor: "",
          pCssEfect: "",
          sCssEfect: "",
          tCssEfect: ""
        },
        mid: {},
        high: {}
      }}
    },
    realData: [],
    fullData: [], //Por si podemos añadir algo para ir viendo el estado en la linea de tiempo
    solFotos : {
      selected : "",
      selectedUrl : "", 
      selectedDesc : "",
      tipos : [
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0094.jpg", key:"AIA 0094 Å", name: "Solar Flares I (AIA 0094 Å)", desc: "This channel (as well as AIA 131) is designed to study solar flares. It measures extremely hot temperatures around 6 million Kelvin (10.8 million F). It can take images every 2 seconds (instead of 10) in a reduced field of view in order to look at flares in more detail."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0131.jpg", key:"AIA 0131 Å", name: "Solar Flares II (AIA 0131 Å)", desc: "This channel (as well as AIA 094) is designed to study solar flares. It measures extremely hot temperatures around 10 million K (18 million F), as well as cool plasmas around 400,000 K (720,000 F). It can take images every 2 seconds (instead of 10) in a reduced field of view in order to look at flares in more detail."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0171.jpg", key:"AIA 0171 Å", name: "Coronal loops (AIA 0171 Å)", desc: "This channel is especially good at showing coronal loops - the arcs extending off of the Sun where plasma moves along magnetic field lines. The brightest spots seen here are locations where the magnetic field near the surface is exceptionally strong."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0193.jpg", key:"AIA 0193 Å", name: "Sun's atmosphere (AIA 0193 Å)", desc: "This channel highlights the outer atmosphere of the Sun - called the corona - as well as hot flare plasma. Hot active regions, solar flares, and coronal mass ejections will appear bright here. The dark areas - called coronal holes - are places where very little radiation is emitted, yet are the main source of solar wind particles."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0211.jpg", key:"AIA 0211 Å", name: "Active sun's atmosphere I (AIA 0211 Å)", desc: "This channel (as well as AIA 335) highlights the active region of the outer atmosphere of the Sun - the corona. Active regions, solar flares, and coronal mass ejections will appear bright here. The dark areas - called coronal holes - are places where very little radiation is emitted, yet are the main source of solar wind particles."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0304.jpg", key:"AIA 0304 Å", name: "Dense plumes of plasma (AIA 0304 Å)", desc: "This channel is especially good at showing areas where cooler dense plumes of plasma (filaments and prominences) are located above the visible surface of the Sun. Many of these features either can't be seen or appear as dark lines in the other channels. The bright areas show places where the plasma has a high density."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_0335.jpg", key:"AIA 0335 Å", name: "Active sun's atmosphere II (AIA 0335 Å)", desc: "This channel (as well as AIA 211) highlights the active region of the outer atmosphere of the Sun - the corona. Active regions, solar flares, and coronal mass ejections will appear bright here. The dark areas - or coronal holes - are places where very little radiation is emitted, yet are the main source of solar wind particles."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_1600.jpg", key:"AIA 1600 Å", name: "Bright areas (AIA 1600 Å)", desc: "This channel (as well as AIA 1700) often shows a web-like pattern of bright areas that highlight places where bundles of magnetic fields lines are concentrated. However, small areas with a lot of field lines will appear black, usually near sunspots and active regions."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_1700.jpg", key:"AIA 1700 Å", name: "Bright areas (AIA 1700 Å)", desc: "This channel (as well as AIA 1600) often shows a web-like pattern of bright areas that highlight places where bundles of magnetic fields lines are concentrated. However, small areas with a lot of field lines will appear black, usually near sunspots and active regions."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_HMIB.jpg", key:"HMIB", name: "Colored Magnetogram HMIB", desc: "A magnetogram is not a 'picture' of the Sun which you might see with your eyes. Rather, it's an image taken by an instrument which can detect the strength and location of the magnetic fields on the Sun. In a magnetogram, grey areas indicate that there is no magnetic field, while black and white areas indicate regions where there is a strong magnetic field."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_HMIBC.jpg", key:"HMIBC", name: "Colored Magnetogram HMIBC", desc: "A magnetogram is not a 'picture' of the Sun which you might see with your eyes. Rather, it's an image taken by an instrument which can detect the strength and location of the magnetic fields on the Sun. In a magnetogram, grey areas indicate that there is no magnetic field, while black and white areas indicate regions where there is a strong magnetic field."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_HMID.jpg", key:"HMID", name: "Colored Magnetogram HMID", desc: "A magnetogram is not a 'picture' of the Sun which you might see with your eyes. Rather, it's an image taken by an instrument which can detect the strength and location of the magnetic fields on the Sun. In a magnetogram, grey areas indicate that there is no magnetic field, while black and white areas indicate regions where there is a strong magnetic field."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_HMII.jpg", key:"HMII", name: "Colored Magnetogram HMII", desc: "A magnetogram is not a 'picture' of the Sun which you might see with your eyes. Rather, it's an image taken by an instrument which can detect the strength and location of the magnetic fields on the Sun. In a magnetogram, grey areas indicate that there is no magnetic field, while black and white areas indicate regions where there is a strong magnetic field."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_HMIIC.jpg", key:"HMIIC", name: "Colored Magnetogram HMIIC", desc: "A magnetogram is not a 'picture' of the Sun which you might see with your eyes. Rather, it's an image taken by an instrument which can detect the strength and location of the magnetic fields on the Sun. In a magnetogram, grey areas indicate that there is no magnetic field, while black and white areas indicate regions where there is a strong magnetic field."},
        {url: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_2048_HMIIF.jpg", key:"HMIIF", name: "Colored Magnetogram HMIIF", desc: "A magnetogram is not a 'picture' of the Sun which you might see with your eyes. Rather, it's an image taken by an instrument which can detect the strength and location of the magnetic fields on the Sun. In a magnetogram, grey areas indicate that there is no magnetic field, while black and white areas indicate regions where there is a strong magnetic field."}
      ]
    },
    sats: [
      {id: 1, class: "solarProbe", name: "Parker Solar Probe", imageDet: "", image: "assets/sondas/ParkerSolarProbe.png", link: ["http://parkersolarprobe.jhuapl.edu/", "http://parkersolarprobe.jhuapl.edu/The-Mission/index.php#introduction"], agencia: ["assets/agencias/nasa.png"], desc: "Parker Solar Probe will swoop to within 4 million miles of the Sun's surface, facing heat and radiation like no spacecraft before it. Launched on Aug. 12, 2018, Parker Solar Probe will provide new data on solar activity and make critical contributions to our ability to forecast major space-weather events that impact life on Earth.<br><br>In order to unlock the mysteries of the corona, but also to protect a society that is increasingly dependent on technology from the threats of space weather, we will send Parker Solar Probe to touch the Sun.<br><br>In 2017, the mission was renamed for Eugene Parker, the S. Chandrasekhar Distinguished Service Professor Emeritus, Department of Astronomy and Astrophysics at the University of Chicago. In the 1950s, Parker proposed a number of concepts about how stars—including our Sun—give off energy. He called this cascade of energy the solar wind, and he described an entire complex system of plasmas, magnetic fields, and energetic particles that make up this phenomenon. Parker also theorized an explanation for the superheated solar atmosphere, the corona, which is contrary to what was expected by physics laws hotter than the surface of the Sun itself. This is the first NASA mission that has been named for a living individual."},
      {id: 2, class: "solarOrbiter", name: "Solar Orbiter", imageDet: "", image: "assets/sondas/SolarOrbiter.webp", link: ["https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter"], agencia: ["assets/agencias/esa.png"], desc: "Solar Orbiter is the most complex scientific laboratory ever to have been sent to the Sun. Although our life-giving star has been an object of scientific interest for centuries, its behaviour still presents a puzzle for scientists. Solar Orbiter will take images of the Sun from closer than any spacecraft before and for the first time look at its uncharted polar regions. By combining observations from Solar Orbiter’s six remote-sensing instruments and four sets of in situ instruments, scientists hope to find answers to some profound questions: What drives the Sun’s 11-year cycle of rising and subsiding magnetic activity? What heats up the upper layer of its atmosphere, the corona, to millions of degrees Celsius? What drives the generation of the solar wind? What accelerates the solar wind to speeds of hundreds of kilometres per second? And how does it all affect our planet?"},
      {id: 3, class: "ace", name: "Advanced Composition Explorer (ACE)", imageDet: "assets/sondas/aceDet.jpg", image: "assets/sondas/ace.png", link: ["https://science.nasa.gov/missions/ace/", "https://astrobiology.nasa.gov/missions/ace/"], agencia: ["assets/agencias/nasa.png"], desc: "ACE provides near-real-time solar wind information over short time periods. When reporting space weather, ACE can provide an advance warning (about one hour) of geomagnetic storms that can overload power grids, disrupt communications on Earth, and present a hazard to astronauts.</br>The prime objective of ACE is to measure and compare the composition of several samples of matter, including the solar corona, the solar wind, and other interplanetary particle populations, the local interstellar medium (ISM), and galactic matter. While there has been great progress addressing these objectives, the changing conditions over the solar cycle present new opportunities. In addition, new observations and theoretical advances, new missions, and the evolving goals of NASA and the Sun-Solar- System Connection (S3C) Theme have introduced new challenges, including the goal of achieving the scientific understanding needed to forecast space weather in the coming years when humans will venture beyond Earth's protective magnetosphere."},
      {id: 4, class: "soho", name: "Heliospheric Observatory mission (SOHO)", imageDet: "", image: "assets/sondas/soho.png", link: ["https://soho.nascom.nasa.gov/home.html", "https://www.nasa.gov/mission_pages/soho/overview/index.html"], agencia: ["assets/agencias/nasa.png", "assets/agencias/esa.png"], desc: "SOHO, the Solar & Heliospheric Observatory, is a project of international collaboration between ESA and NASA to study the Sun from its deep core to the outer corona and the solar wind.<br><br>SOHO was launched on December 2, 1995. The SOHO spacecraft was built in Europe by an industry team led by prime contractor Matra Marconi Space (now EADS Astrium) under overall management by ESA. The twelve instruments on board SOHO were provided by European and American scientists. Nine of the international instrument consortia are led by European Principal Investigators (PI's), three by PI's from the US. Large engineering teams and more than 200 co-investigators from many institutions supported the PI's in the development of the instruments and in the preparation of their operations and data analysis. NASA was responsible for the launch and is now responsible for mission operations. Large radio dishes around the world which form NASA's Deep Space Network are used for data downlink and commanding. Mission control is based at Goddard Space Flight Center in Maryland."},
      {id: 5, class: "stereo", name: "Solar Terrestrial Relations Observatory (STEREO)", imageDet: "assets/sondas/stereoDet.jpg", image: "assets/sondas/stereo.png", link: ["https://stereo.gsfc.nasa.gov/", "https://www.nasa.gov/mission_pages/stereo/main/index.html"], agencia: ["assets/agencias/nasa.png"], desc: "Launched in October 2006, the Solar Terrestrial Relations Observatory, or STEREO, has provided scientists a unique and revolutionary view of the Sun-Earth System. Composed of two nearly identical observatories -- one ahead of Earth in its orbit, the other trailing behind --  STEREO has traced the flow of energy and matter from the Sun to Earth.<br><br>Solar ejections, like coronal mass ejections (CMEs), are the most powerful drivers of the Sun-Earth connection. Yet despite their importance, scientists don't fully understand the origin and evolution of CMEs, nor their structure or extent in interplanetary space. STEREO's unique 3D images of the structure of CMEs is enabling scientists to determine their fundamental nature and origin.<br><br>STEREO is also a key addition to the fleet of space weather detection satellites. It provides more accurate alerts for the arrival time of Earth-directed solar ejections with its unique side-viewing perspective."},
      {id: 6, class: "wind", name: "Comprehensive Solar Wind Laboratory (WIND)", imageDet: "assets/sondas/windDet.gif", image: "assets/sondas/wind.png", link: ["https://wind.nasa.gov/"], agencia: ["assets/agencias/nasa.png"], desc: "Wind is a spin stabilized spacecraft launched with a Delta II rocket on November 1, 1994. After several orbits through the magnetosphere, Wind was placed in a Lissajous orbit around the L1 Lagrange point -- more than 200 Re upstream of Earth -- in early 2004 to observe the unperturbed solar wind that is about to impact the magnetosphere of Earth. Wind was later inserted into a halo orbit about L1 in 2020.<br><br>Wind and Polar were part of the stand-alone Global Geospace Science (GGS) program, a subset of the International Solar Terrestrial Physics (ISTP) program which included the additional missions Geotail, SoHO and Cluster. The objective of the ISTP program was to study the origin of solar variability and activity, the transport of manifestations of that activity to the Earth via plasma processes, and the cause-and-effect relationships between that time varying energy transport and the near-earth environment.<br><br>Wind's original name was Interplanetary Physics Laboratory while its GGS partner Polar was short for Polar Plasma Laboratory. This is, in part, why the name for the Wind spacecraft is sometimes written in all capital letters though it was never an acronym."},
      {id: 7, class: "icon", name: "Ionospheric Connection Explorer (ICON)", imageDet: "assets/sondas/iconDet.png", image: "assets/sondas/icon.png", link: ["https://www.nasa.gov/icon"], agencia: ["assets/agencias/nasa.png"], desc: "The Ionospheric Connection Explorer studies the frontier of space: the dynamic zone high in our atmosphere where terrestrial weather from below meets space weather above. In this region, the tenuous gases are anything but quiet, as a mix of neutral and charged particles travel through in giant winds. These winds can change on a wide variety of time scales -- due to Earth's seasons, the day's heating and cooling, and incoming bursts of radiation from the sun.<br><br>This region of space and its changes have practical repercussions, given our ever-increasing reliance on technology -- this is the area through which radio communications and GPS signals travel. Variations there can result in distortions or even complete disruption of signals. In order to understand this complicated region of near-Earth space, called the ionosphere, NASA has developed the ICON mission. To understand what drives variability in the ionosphere requires a careful look at a complicated system that is driven by both terrestrial and space weather.<br><br>ICON helps determine the physics of our space environment and pave the way for mitigating its effects on our technology, communications systems and society."},
      {id: 8, class: "gold", name: "Global-scale Observations of the Limb and Disk (GOLD)", imageDet: "assets/sondas/goldDet.jpg", image: "assets/sondas/gold.png", link: ["https://gold.cs.ucf.edu/", "https://www.nasa.gov/content/goddard/gold"], agencia: ["assets/agencias/esa.png"], desc: "The Global-scale Observations of the Limb and Disk, or GOLD, mission is designed to explore the nearest reaches of space. Capturing never-before-seen images of Earth’s upper atmosphere, GOLD explores in unprecedented detail our space environment — which is home to astronauts, radio signals used to guide airplanes and ships, as well as satellites that provide communications and GPS systems. The more we know about the fundamental physics of this region of space, the more we can protect our assets there.<br><br>Gathering observations from geostationary orbit above the Western Hemisphere, GOLD measures the temperature and composition of neutral gases in Earth’s thermosphere. This part of the atmosphere co-mingles with the ionosphere, which is made up of charged particles. Both the Sun from above and terrestrial weather from below can change the types, numbers, and characteristics of the particles found here — and GOLD helps track those changes.<br><br>Activity in this region is responsible for a variety of key space weather events. GOLD scientists are particularly interested in the cause of dense, unpredictable bubbles of charged gas that appear over the equator and tropics, sometimes causing communication problems. As we discover the very nature of the Sun-Earth interaction in this region, the mission could ultimately lead to ways to improve forecasts of such space weather and mitigate its effects."},
      {id: 9, class: "mms", name: "Magnetospheric Multiscale (MMS)", imageDet: "assets/sondas/mmsDet.jpg", image: "assets/sondas/mms.png", link: ["https://mms.gsfc.nasa.gov/", "https://www.nasa.gov/mission_pages/mms/index.html"], agencia: ["assets/agencias/nasa.png"], desc: "The Magnetospheric Multiscale Mission, or MMS, investigates how the Sun's and Earth's magnetic fields connect and disconnect, explosively transferring energy from one to the other. This process occurs throughout the universe and is known as magnetic reconnection.<br><br>During its tenure in space, MMS has uncovered details about how magnetic reconnection works on small scales, discovered magnetic reconnection in previously unexpected places, broken a Guinness World Record for highest altitude fix of a GPS, and opened insights into magnetic reconnection in nuclear and astrophysics, among other things.<br><br>Launched on March 12, 2015, the mission uses four identical spacecraft flying in a pyramid-shape to measure magnetic field lines and charged particles in three-dimensions. The four spacecraft travel directly through areas near Earth known to be magnetic reconnection sites. Using instruments 100 times faster than those flown on previous spacecraft, MMS is able to study smaller and faster processes than ever before.<br><br>Magnetic reconnection is a fundamental process throughout the universe that taps energy stored in magnetic fields and converts it into heat and energy in the form of charged particle acceleration and large-scale flows of matter. On the Sun-side of Earth, magnetic reconnection can link the Sun's magnetic field lines to Earth's magnetic field lines, allowing material and energy from the Sun to funnel into Earth's magnetic environment. On the night side of Earth, reconnection is believed to help trigger auroras, also known as the northern and southern lights.<br><br>The most easily accessible place to study natural magnetic reconnection is in near-Earth space, where MMS orbits. By studying reconnection in this local, natural laboratory, MMS helps scientists understand reconnection elsewhere as well, such as in the atmosphere of the Sun and other stars, in the vicinity of black holes and neutron stars, and at the boundary between our solar system's heliosphere and interstellar space, where it’s harder to study."},
      {id: 10, class: "iris", name: "Interface Region Imaging Spectrograph (IRIS)", imageDet: "assets/sondas/irisDet.png", image: "assets/sondas/iris.png", link: ["https://www.nasa.gov/mission_pages/iris/index.html"], agencia: ["assets/agencias/nasa.png"], desc: "The Interface Region Imaging Spectrograph — IRIS — is a NASA Small Explorer Mission to observe how solar material moves, gathers energy, and heats up as it travels through a little-understood region in the Sun's lower atmosphere. Tracking how material and energy move through this region is a crucial part of understanding solar dynamics. Such information can help explain what causes the ejection of solar material — from the steady stream of the solar wind to larger, explosive eruptions such as coronal mass ejections (CMEs) — that travels toward Earth and causes space weather that can disrupt human technology.<br><br>The solar atmosphere has a unique inverted temperature structure — the further away you get, the hotter it gets. The atmosphere changes from 6,000 K at the surface to about a million K at the top of the transition region. Scientists don’t yet have enough information to distinguish between various theories on why this happens. Tracking how material and energy move through this region is a crucial part of understanding the dynamics of the Sun.<br><br>The solar atmosphere has a unique inverted temperature structure — the further away you get, the hotter it gets. The atmosphere changes from 6,000 K at the surface to about a million K at the top of the transition region. Scientists don’t yet have enough information to distinguish between various theories on why this happens. Tracking how material and energy move through this region is a crucial part of understanding the dynamics of the Sun.<br><br>IRIS is the first mission designed to simultaneously observe the range of temperatures specific to the chromosphere and transition region at very high spatial and temporal resolution — going beyond earlier missions that were lower resolution or did not cover a wide range of temperatures. IRIS also draws on state of the art computer modeling sophisticated enough to deal with the complexity of this area. In combination, IRIS's resolution, wide temperature coverage and computer modeling will enable scientists to map plumes of solar material as they move throughout the region and to pinpoint where in their travels they gain energy and heat."},
      {id: 11, class: "sdo", name: "SDO (Solar Dynamics Observatory)", imageDet: "assets/sondas/sdoDet.jpg", image: "assets/sondas/sdo.png", link: ["https://sdo.gsfc.nasa.gov/", "https://www.nasa.gov/mission_pages/sdo/main/index.html"], agencia: ["assets/agencias/nasa.png"], desc: "Since its launch in 2010, NASA’s Solar Dynamics Observatory, or SDO, has studied how the Sun creates solar activity and drives space weather -- the dynamic conditions in space that impact the entire solar system, including Earth. SDO’s measurements of the Sun -- from the interior to the atmosphere, magnetic field, and energy output -- have greatly contributed to our understanding of our closest star.<br><br>SDO observations start in the interior of the Sun with the solar dynamo -- the churning of the Sun’s interior that creates its magnetic field and drives space weather. Further out, SDO observes the solar surface to directly measure the magnetic field and the solar atmosphere to understand how magnetic energy is linked to the interior and converted to space weather-causing events. Finally, SDO measures the extreme ultraviolet irradiance of the Sun that is a key driver to the structure and composition of the Earth’s upper atmosphere.<br><br>To make all these measurements, SDO hosts three scientific experiments: Atmospheric Imaging Assembly (AIA), EUV Variability Experiment (EVE), Helioseismic and Magnetic Imager (HMI). Each of these experiments performs several measurements to characterize how and why the Sun varies. AIA alone takes images in 10 wavelengths every 10 seconds, creating a wealth of information about our Sun never previously possible."},
      {id: 12, class: "hinode", name: "Hinode", imageDet: "assets/sondas/hinodeDet.png", image: "assets/sondas/hinode.png", link: ["https://www.nao.ac.jp/en/research/telescope/hinode.html", "https://www.nasa.gov/mission_pages/hinode/index.html"], agencia: ["assets/agencias/jaxa.png"], desc: "Hinode is an international mission to study our nearest star, the Sun. Hinode explores the magnetic fields of the Sun in order to improve understanding of what powers the solar atmosphere and drives solar eruptions. Hinode’s Solar Optical Telescope is the first space-borne instrument to measure the strength and direction of the Sun’s magnetic field on the Sun’s surface, the photosphere.<br><br>Combined with two other Hinode instruments, the EUV imaging spectrometer, or EIS, and the X-ray/EUV telescope, or XRT, the mission is designed to understand the causes of eruptions in the solar atmosphere and relate those eruptions to the intense heating of the corona and the mechanisms that drive the constant outflow of solar radiation, the solar wind.<br><br>Hinode follows a Sun-synchronous orbit around Earth at an altitude of nearly 400 miles (a little under 650 km). Its orbit allows Hinode to observe the Sun continuously for nine months at a time. During the summer (in the northern hemisphere) Hinode experi- ences an “eclipse season” during which the Sun is eclipsed by Earth for a maximum of ten minutes in each 98-minute orbit."},
      {id: 13, class: "timed", name: "TIMED", imageDet: "assets/sondas/timedDet.jpg", image: "assets/sondas/timed.png", link: ["http://www.timed.jhuapl.edu/WWW/index.php"], agencia: ["assets/agencias/nasa.png"], desc: "For centuries, scientists have realized that Earth's natural environment is greatly impacted by the abundance of solar energy striking the Earth from a constantly changing sun. Over the last few years, they have begun to realize that human activities are also playing a role in changing our environment.<br><br>By studying portions of Earth's atmosphere, scientists believe global change is occurring, primarily due to variations in the sun's cycle and from human-induced changes to the atmosphere by the release of gases, such as methane and carbon dioxide. Despite signs of global change, scientists haven't had a benchmark against which future changes in Earth's upper atmosphere can be globally compared, analyzed, or predicted because there are still portions of this solar-terrestrial chain, including regions within Earth's atmosphere, that are poorly understood.<br><br>studying the influences of the sun and humans on the least explored and understood region of Earth's atmosphere – the Mesosphere and Lower Thermosphere/Ionosphere (MLTI). The MLTI region is a gateway between Earth's environment and space, where the sun's energy is first deposited into Earth's environment. TIMED is focusing on a portion of this atmospheric region located approximately 40-110 miles (60-180 kilometers) above the surface."}
    ]
    
  }

  constructor( public modal:NgbModal, public service:DataServiceService, public popoverConfig: NgbPopoverConfig) {
    popoverConfig.animation = true;
    popoverConfig.popoverClass = "popoverCustomClass";
    popoverConfig.triggers = 'hover'
    popoverConfig.container = "body";
  }

  ngOnInit() {
    
    let howto = localStorage.getItem("howto");
    if(howto) {
      this.model.showHowTo = false;
      let imageToShow = Math.floor(Math.random() * (14 + 1))
      this.setSolSelected(this.model.solFotos.tipos[imageToShow]);
    } else {
      this.setSolSelected(this.model.solFotos.tipos[2]);
    }   

    let fraseSelected = Math.floor(Math.random() * (6 + 1))
    this.model.frases.selected = this.model.frases.posibles[fraseSelected];
  }

  ngAfterViewInit() {
    this.service.getSunData().subscribe((response) => {
      if(response && response["estado"] == 1 && response["data"]) {
        let fullData = JSON.parse(response["data"]);
        let realTimeData = fullData.pop();
        fullData.push(realTimeData);
        this.model.realData = realTimeData;
        this.model.fullData = fullData;
        this.changePageBySunData();
      } else {
        //TODO Mostrar mensaje de error al usuario
      }
    })
  }

  changePageBySunData() {
    //Solar wind -> Sound
    this.setWindLevelVariant();
    this.windSound = new Audio();
    this.windSound.src = this.model.controlValues.wind.currentVariant.sound;
    this.windSound.onended = () => {
      this.model.controlValues.wind.soundActive = false;
    };
    this.windSound.load();

    //Solar wind -> temperature
    let temCent = Math.round((this.model.realData[3] * this.model.controlValues.temp.equivalencias.min)/this.model.controlValues.temp.rangoNormal.min);
    this.model.controlValues.temp.temperaturas.cent = temCent + " °C (Equivalent value)"
    this.model.controlValues.temp.temperaturas.faren = (temCent + 32) + " °F (Equivalent value)"
    this.model.controlValues.temp.temperaturas.real = this.model.realData[3] + " °K (Real value)";
    this.model.controlValues.temp.temperaturas.raw = parseInt(this.model.realData[3]);
    this.model.controlValues.temp.temperaturas.actual = 0;
    this.model.controlValues.temp.temperaturas.visible = this.model.controlValues.temp.temperaturas.real;

    let rojo = {min: 80, med: 150, max: 200};
    let verde = {min: 0, med: 60, max: 135};
    let azul = {min: 0, med: 60, max: 135};

    let finalRojo = rojo.min;
    let finalVerde = verde.max;
    let finalAzul = azul.max;

    if(this.model.realData.length > 3 && this.model.realData[3]) {
      if(parseFloat(this.model.realData[3]) >= this.model.controlValues.temp.rangoNormal.max) {
        finalRojo = rojo.max;
        finalVerde = verde.min;
        finalAzul = azul.min;
      } else if(parseFloat(this.model.realData[3]) <= this.model.controlValues.temp.rangoNormal.min) {
        finalRojo = rojo.min;
        finalVerde = verde.max;
        finalAzul = azul.max;
      } else {
        finalRojo = rojo.med;
        finalVerde = verde.med;
        finalAzul = azul.med;
      }
    }

    let headerColor = "rgb(" + finalRojo + " " + finalVerde + " " + finalAzul + ")";
    this.pageHeader.nativeElement.style.backgroundColor = headerColor;
    this.frase.nativeElement.style.color = headerColor;
    document.getElementById("selectSolId")!.style.backgroundColor = headerColor.replace(")", " / 70%)");
    
    this.model.controlValues.temp.color = headerColor;

    if(finalRojo > 100) {
      this.tituloText.nativeElement.style.color = "#FFF";
      this.sunData.nativeElement.style.color = "#FFF";
    } else {
      this.tituloText.nativeElement.style.color = "#000";
      this.sunData.nativeElement.style.color = "#000";
    }

  }

  setWindLevelVariant() {
    if(this.model.realData[2] < this.model.controlValues.wind.rangoNormal.min) {
      this.model.controlValues.wind.currentVariant = Object.assign({}, this.model.controlValues.wind.variants.low);
    } else if(this.model.realData[2] > this.model.controlValues.wind.rangoNormal.max) {
      this.model.controlValues.wind.currentVariant = Object.assign({}, this.model.controlValues.wind.variants.high);
    } else {
      this.model.controlValues.wind.currentVariant = Object.assign({}, this.model.controlValues.wind.variants.mid);
    }

    let tempInfo = this.model.controlValues.wind.currentVariant.info.replace("##CURRENT_VALUE##", this.model.realData[2] + " Km/seg")
    this.model.controlValues.wind.currentVariant.info = tempInfo;
    this.model.controlValues.wind.value = this.model.realData[2];
  }

  setSolSelected(sol:any) {
    this.model.solFotos.selected = sol.key;
    this.model.solFotos.selectedDesc = sol.desc;
    this.model.solFotos.selectedUrl = sol.url;
  }

  selectSol(event:any) {
    this.model.solFotos.tipos.forEach(sol => {
      if(sol.key === event.value) {
        this.setSolSelected(sol);
      }
    });
  }

  showSatData(sat:any) {
    const modalRef = this.modal.open(SateliteDetailComponent, { size: 'xl' });
    modalRef.componentInstance.satData = sat;
    modalRef.componentInstance.model = this.model;
  }

  showCreateStormPopup() {
    const modalRef = this.modal.open(CreateStormComponent, { size: 'l' });
    modalRef.componentInstance.actualData = this.model.controlValues;
  }

  hearWind() {
    if(this.model.controlValues.wind.soundActive) {
      this.windSound.pause();
      this.windSound.currentTime = 0;
      this.model.controlValues.wind.soundActive = false;

    } else {
      this.windSound.play();
      this.model.controlValues.wind.soundActive = true;
    }
  }

  changeTempUnit() {
    switch(this.model.controlValues.temp.temperaturas.actual) {
      case 0:
        this.model.controlValues.temp.temperaturas.actual = 1;
        this.model.controlValues.temp.temperaturas.visible = this.model.controlValues.temp.temperaturas.faren;
        break;

      case 1:
        this.model.controlValues.temp.temperaturas.actual = 2;
        this.model.controlValues.temp.temperaturas.visible = this.model.controlValues.temp.temperaturas.cent;
        break;

      default:
        this.model.controlValues.temp.temperaturas.actual = 0;
        this.model.controlValues.temp.temperaturas.visible = this.model.controlValues.temp.temperaturas.real;
        break;
    }
  }

  showWindInfo() {
    const modalRef = this.modal.open(SolarWindDetailComponent, { size: 'xl' });
    modalRef.componentInstance.model = this.model;
  }

  showMisionsInfo() {
    const modalRef = this.modal.open(MisionsInfoComponent, { size: 'xl' });
    modalRef.componentInstance.model = this.model.controlValues.wind;
  }

  showHowTo() {
    this.model.showHowTo = true;
    localStorage.removeItem("howto");
  }

  closeHowTo() {
    this.model.showHowTo = false;
    localStorage.setItem("howto", "1");
  }

}
