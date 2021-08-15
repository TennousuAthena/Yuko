<!DOCTYPE HTML>
<html lang="zh-cmn-Hans">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<title><?php wp_title('-', true, 'right');  echo get_option('blogname'); if (is_home ()) echo " - " . get_option('blogdescription'); if ($paged > 1) echo '-Page ', $paged; ?></title>
<?php
$sr_1 = 0; $sr_2 = 0; $commenton = 0; 
if( dopt('d_sideroll_b') ){ 
    $sr_1 = dopt('d_sideroll_1');
    $sr_2 = dopt('d_sideroll_2');
}
if( is_singular() ){ 
    if( comments_open() ) $commenton = 1;
}
?>
<script>
window._deel = {name: '<?php bloginfo('name') ?>',url: '<?php echo get_bloginfo("template_url") ?>', ajaxpager: '<?php echo dopt('d_ajaxpager_b') ?>', commenton: <?php echo $commenton ?>, roll: [<?php echo $sr_1 ?>,<?php echo $sr_2 ?>],appkey: {tqq: '<?php echo dopt('t_appkey_tqq') ?>',tsina: '<?php echo dopt('t_appkey_tsina') ?>'}}
</script>
<link rel="shortcut icon" href="<?php echo get_bloginfo("template_url") ?>/img/favicon.ico">
<?php 
wp_head(); 
if( dopt('d_headcode_b') ) echo dopt('d_headcode'); ?>
</head>
<body <?php body_class(); ?>>
<header id="header" class="header">
<div class="container-inner">
 <div class="yusi-logo">
<a href="<?php bloginfo('url'); ?>"><h1><span class="yusi-mono"><?php bloginfo('name'); ?></span>    <span class="yusi-bloger"><?php bloginfo('description'); ?></span></h1></a>
</div>
</div>
<div id="nav-header" class="navbar">
<ul class="nav"><?php yusi_the_menu('nav') ?>
<li style="float:right;">
<div class="toggle-search"><i class="fa fa-search"></i></div>
<div class="search-expand" style="display: none;">
    <div class="search-expand-inner">
        <form method="get" class="searchform themeform" onsubmit="location.href='<?php echo esc_url(home_url('/search/')); ?>' + encodeURIComponent(this.s.value).replace(/%20/g, '+'); return false;" action="<?php echo esc_url( home_url( '/' ) ); ?>">
            <div>
                <input type="text" class="search" name="s" autocomplete="off" placeholder="搜索其实Too Simple..">
            </div>
        </form>
    </div>
</div>
</li>
		</ul>
 	</div>
</header>
<section class="container">
    <div class="speedbar">
		<?php 
		if( dopt('d_sign_b') ){ 
			global $current_user; 
			get_currentuserinfo();
			$uid = $current_user->ID;
			$u_name = get_user_meta($uid,'nickname',true);
		?>
			<div class="pull-right">
				<?php
                if(is_user_logged_in()){
                    if(current_user_can("manage_options")){
                        echo '<i class="fa fa-certificate" aria-hidden="true"></i> <a href="/wp-admin" target="_blank">管理 </a>';
                    }
				    echo '<i class="fa fa-user"></i><a href="/wp-admin/profile.php" title="设置我的个人资料"> '.$u_name.' </a>';
				    echo ' <i class="fa fa-power-off"></i> ';
				}else{
                    echo '<i class="fa fa-user-plus"></i> <a href="/wp-login.php?action=register">注册</a> ';
				    echo '<i class="fa fa-user"></i> ';
				};
				wp_loginout(); ?>
			</div>
		<?php } ?>
		<div class="toptip"><strong class="text-success"><i class="fa fa-volume-up"></i> </strong> <?php echo dopt('d_tui'); ?></div>
	</div>
	<?php if( dopt('d_adsite_01_b') ) echo '<div class="banner banner-site">'.dopt('d_adsite_01').'</div>'; ?>