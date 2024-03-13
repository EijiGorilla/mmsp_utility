import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';
import Locate from '@arcgis/core/widgets/Locate.js';
import {
  constructionBoundaryLayer,
  stationBoxLayer,
  //stationLayer,
  utilityLineLayer,
  utilityLineLayer1,
  utilityPointLayer,
  utilityPointLayer1,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const utilityGroupLayer = new GroupLayer({
  title: 'Utility Relocation',
  visible: true,
  visibilityMode: 'independent',
  layers: [utilityLineLayer1, utilityLineLayer, utilityPointLayer1, utilityPointLayer],
});

const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationBoxLayer, constructionBoundaryLayer], //stationLayer,
});

map.add(alignmentGroupLayer);
map.add(utilityGroupLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [120.5793, 15.18],
  zoom: 13,
  viewingMode: 'local',
  camera: {
    position: {
      x: 121.0322874,
      y: 14.6750462,
      z: 1000,
    },
    tilt: 65,
  },
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
    // disable stars
    starsEnabled: false,
    //disable atmosphere
    atmosphereEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' || item.title === 'Viaduct' || item.title === 'Pier No'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

// Compass
var compass = new Compass({
  view: view,
});
view.ui.add(compass, 'top-right');

// Search
const sources = [
  {
    layer: utilityPointLayer,
    searchFields: ['Id'],
    displayField: 'Id',
    exactMatch: false,
    outFields: ['Id'],
    name: 'Unique ID (Point)',
    placeholder: 'example: MER0001-X01',
  },
  {
    layer: utilityLineLayer1,
    searchFields: ['Id'],
    displayField: 'Id',
    exactMatch: false,
    outFields: ['Id'],
    name: 'Unique ID (Line)',
    placeholder: 'example: MER0001-X01',
  },
];

var searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'Chainage or Utility ID',
  includeDefaultSources: false,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIconClass: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});

const locateBtn = new Locate({
  view,
  // container: undefined,
});
view.ui.add(locateBtn, { position: 'top-right' });
