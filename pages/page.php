<?php 
/*
	template name: 单页面
	description: template for yusi123.com Yusi theme 
*/
get_header();
?>

<div class="pagewrapper clearfix">
	<aside class="pagesidebar">
		<ul class="pagesider-menu">
			<?php yusi_the_Pagemenu('pagemenu') ?>
		</ul>
	</aside>
	<div class="pagecontent">
		<header class="pageheader clearfix">
			<h1 class="pull-left">
				<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
			</h1>
			<div class="pull-right"><!-- 百度分享 -->
	<?php deel_share() ?>
			</div>
		</header>
		<?php while (have_posts()) : the_post(); ?>
			<div class="article-content">
				<?php the_content(); ?>
			</div>
		<?php comments_template('', true); endwhile;  ?>
	</div>
</div>

<?php get_footer(); ?>