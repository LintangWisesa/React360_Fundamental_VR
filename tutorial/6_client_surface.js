// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // ================================================
  // Render your app content to the default CYLINDER surface
  // r360.renderToSurface(
  //   r360.createRoot('react360_notes', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );
  
  // ================================================
  // bikin surface Flat
  const flatSurface = new Surface(
    1000,
    1000,
    Surface.SurfaceShape.Flat,
  );
  // .setAngle ( yaw(L/R), pitch(UP/DOWN), roll(rotate) )
  flatSurface.setAngle(-Math.PI / 2, 0);  // left
  // flatSurface.setAngle(Math.PI / 4, Math.PI / 4);  // 45° right, 45° up 
  // flatSurface.setAngle(0, -Math.PI / 6);  // low panel
  // flatSurface.setAngle(Math.PI / 4, Math.PI / 4, Math.PI / 4);

  // bikin surface cylinder
  const cylSurface = new Surface(
    1000,
    1000,
    Surface.SurfaceShape.Cylinder,
  );
  // cylinder surface always be in front of user!

  // =================================================
  // render app to a surface
  r360.renderToSurface(
    r360.createRoot('react360_notes'),
    flatSurface,
    // cylSurface,
  );

  // 3D image from asset!
  r360.renderToLocation(
    r360.createRoot('Sphere'),
    r360.getDefaultLocation(),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('samsung4.jpeg'));
}

window.React360 = {init};
