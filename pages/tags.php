<?php 
/*
 	template name: 标签云
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
			<div class="pull-right">
				<?php deel_share() ?>
			</div>
		</header>
		<ul class="tag-clouds">
			<?php $tags_list = get_tags('orderby=count&order=DESC');
			if ($tags_list) { 
				foreach($tags_list as $tag) {
					echo '<li><a class="btn btn-mini" href="'.get_tag_link($tag).'">'. $tag->name .'</a><strong>x '. $tag->count .'</strong><br>'; 					
					echo '</li>';
				} 
			} 
			?>
		</ul>
	</div>
</div>
<?php get_footer(); ?>