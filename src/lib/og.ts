// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

type Props = {
  title: string;
  meta: string;
};

export function generateOgImage({ title, meta }: Props) {
  return `https://res.cloudinary.com/opakholis/image/upload/c_scale,w_1200,h_600,q_95/c_fit,co_rgb:18181B,l_text:arial_72_bold:${e(
    title
  )},w_1100/fl_layer_apply,g_south_west,x_75,y_135/c_fit,co_rgb:18181B80,l_text:arial_36:${e(
    meta
  )},w_1100/fl_layer_apply,g_south_west,x_75,y_75/v1645687958/og.jpg`;
}
