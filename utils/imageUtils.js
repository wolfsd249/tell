/**
 * دالة للتعامل مع روابط الصور
 * إذا كان الرابط من Cloudinary، ترجعه كما هو
 * إذا كان من uploads المحلي، ترجع صورة افتراضية
 */

// الصور الافتراضية
const DEFAULT_IMAGES = {
  avatar: '/images/find.png',
  logo: '/images/find.png',
  ad: '/images/find.png',
  post: '/images/find.png',
  design: '/images/find.png',
  product: '/images/find.png',
  store: '/images/find.png'
};

/**
 * دالة لمعالجة رابط الصورة
 * @param {string} imageUrl - رابط الصورة
 * @param {string} type - نوع الصورة (avatar, logo, ad, post, design, product, store)
 * @returns {string} - رابط الصورة المعالج
 */
function processImageUrl(imageUrl, type = 'avatar') {
  // إذا كان الرابط فارغ أو null
  if (!imageUrl || imageUrl === 'null' || imageUrl === 'undefined') {
    return DEFAULT_IMAGES[type] || DEFAULT_IMAGES.avatar;
  }

  // إذا كان الرابط من Cloudinary (يحتوي على res.cloudinary.com)
  if (imageUrl.includes('res.cloudinary.com')) {
    return imageUrl;
  }

  // إذا كان الرابط يبدأ بـ /uploads/ أو /Uploads/ (مسارات محلية)
  if (imageUrl.startsWith('/uploads/') || imageUrl.startsWith('/Uploads/')) {
    return DEFAULT_IMAGES[type] || DEFAULT_IMAGES.avatar;
  }

  // إذا كان الرابط يبدأ بـ http أو https (روابط خارجية)
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  // إذا كان الرابط يبدأ بـ /images/ (صور ثابتة في public)
  if (imageUrl.startsWith('/images/')) {
    return imageUrl;
  }

  // في جميع الحالات الأخرى، استخدم الصورة الافتراضية
  return DEFAULT_IMAGES[type] || DEFAULT_IMAGES.avatar;
}

/**
 * دالة لمعالجة صورة البروفايل
 * @param {string} avatarUrl - رابط صورة البروفايل
 * @returns {string} - رابط صورة البروفايل المعالج
 */
function processAvatarUrl(avatarUrl) {
  return processImageUrl(avatarUrl, 'avatar');
}

/**
 * دالة لمعالجة صورة الشعار
 * @param {string} logoUrl - رابط الشعار
 * @returns {string} - رابط الشعار المعالج
 */
function processLogoUrl(logoUrl) {
  return processImageUrl(logoUrl, 'logo');
}

/**
 * دالة لمعالجة صورة الإعلان
 * @param {string} adImageUrl - رابط صورة الإعلان
 * @returns {string} - رابط صورة الإعلان المعالج
 */
function processAdImageUrl(adImageUrl) {
  return processImageUrl(adImageUrl, 'ad');
}

/**
 * دالة لمعالجة صورة المنشور
 * @param {string} postImageUrl - رابط صورة المنشور
 * @returns {string} - رابط صورة المنشور المعالج
 */
function processPostImageUrl(postImageUrl) {
  return processImageUrl(postImageUrl, 'post');
}

/**
 * دالة لمعالجة صورة التصميم
 * @param {string} designImageUrl - رابط صورة التصميم
 * @returns {string} - رابط صورة التصميم المعالج
 */
function processDesignImageUrl(designImageUrl) {
  return processImageUrl(designImageUrl, 'design');
}

module.exports = {
  processImageUrl,
  processAvatarUrl,
  processLogoUrl,
  processAdImageUrl,
  processPostImageUrl,
  processDesignImageUrl,
  DEFAULT_IMAGES
}; 